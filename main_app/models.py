from datetime import timedelta

from django.core.exceptions import ValidationError
from django.db import models
from learning.models import Tag

# Create your models here.

class File(models.Model):
  bytes = models.TextField()
  filename = models.CharField(max_length=255)
  mimetype = models.CharField(max_length=50)

  def __str__(self):
    return self.filename

class Member(models.Model):
    ROLE_CHOICES = (
        ('president', 'President'),
        ('vice_president', 'Vice President'),
        ('treasurer', 'Treasurer'),
        ('officer', 'Officer'),
    )
    name = models.CharField(max_length=255,help_text="Member full name")
    role = models.CharField(
        max_length=50, choices=ROLE_CHOICES, null=True, blank=True,
        help_text="Leadership role. Leave blank for a regular Software team member.",
    )
    image = models.ImageField(upload_to='main_app.File/bytes/filename/mimetype', null=True, blank=True,help_text="Please compress image, convert type to webp and change size to 500x500 px before uploading. https://imagecompressor.com/, https://cloudconvert.com/webp-converter, https://imageresizer.com/")

    def delete(self, *args, **kwargs):
        image_name = self.image.name if self.image else None
        super(Member, self).delete(*args, **kwargs)
        if image_name:
            File.objects.filter(filename=image_name).delete()

    def __str__(self):
        return self.name
    
class SocialMedia(models.Model):
    SOCIAL_MEDIA_CHOICES = (
        ('linkedin', 'LinkedIn'),
        ('github', 'GitHub'),
        ('mail', 'Email'),
        ('instagram', 'Instagram'),
    )
    social_media = models.CharField(max_length=255, choices=SOCIAL_MEDIA_CHOICES)
    social_media_link = models.CharField(max_length=255)
    member = models.ForeignKey(Member,on_delete=models.CASCADE,related_name="social_medias")

    def __str__(self):
        return f"{self.member.name} — {self.get_social_media_display()}"

    class Meta:
        ordering = [
            'social_media'
        ]
        
class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    github_link = models.URLField(max_length=1000)
    deploy_link = models.URLField(max_length=1000, null=True, blank=True)
    client = models.CharField(max_length=255, null=True, blank=True)
    paid_client_project = models.BooleanField(default=False)
    in_development = models.BooleanField(default=False, help_text="Toggle if this project is ongoing/in development")
    tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Event(models.Model):
    EVENT_TYPE_CHOICES = (
        ('workshop', 'Workshop'),
        ('meeting', 'Meeting'),
        ('social', 'Social'),
        ('info_session', 'Info Session'),
        ('other', 'Other'),
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255)
    summary = models.CharField(
        max_length=300,
        help_text="Short excerpt for feed cards and calendar previews.",
    )
    description = models.TextField(
        help_text="Full event details shown on the dedicated event page.",
    )
    start_datetime = models.DateTimeField(
        help_text="When the event starts (HST).",
    )
    end_datetime = models.DateTimeField(
        null=True, blank=True,
        help_text="Optional. Leave blank for open-ended or single-moment events.",
    )
    location = models.CharField(
        max_length=255, blank=True,
        help_text="Venue name, room, or 'Online'.",
    )
    registration_link = models.URLField(
        max_length=1000, null=True, blank=True,
        help_text="Optional RSVP or sign-up URL.",
    )
    event_type = models.CharField(
        max_length=20, choices=EVENT_TYPE_CHOICES, default='other',
    )
    poster = models.ImageField(
        upload_to='main_app.File/bytes/filename/mimetype',
        null=True, blank=True,
        help_text="Optional flyer/poster. Compress to webp before upload.",
    )
    is_published = models.BooleanField(
        default=False,
        help_text="Only published events appear on the public site.",
    )
    is_recurring = models.BooleanField(
        default=False,
        help_text="Repeat weekly on the same weekday as the first meeting. Only for meetings.",
    )
    recurrence_end_date = models.DateField(
        null=True, blank=True,
        help_text="Last calendar day of the recurring series (e.g. semester end).",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def clean(self):
        super().clean()
        if self.end_datetime and self.start_datetime and self.end_datetime < self.start_datetime:
            raise ValidationError({"end_datetime": "End datetime must be on or after start datetime."})
        if self.is_published and not self.slug:
            raise ValidationError({"slug": "Slug is required before publishing an event."})
        if self.is_recurring and self.event_type != 'meeting':
            raise ValidationError({"is_recurring": "Recurring events are only supported for meetings."})
        if self.is_recurring:
            if not self.recurrence_end_date:
                raise ValidationError({"recurrence_end_date": "Required for recurring meetings."})
            if self.recurrence_end_date < self.start_datetime.date():
                raise ValidationError({"recurrence_end_date": "Must be on or after the first meeting date."})
        elif self.recurrence_end_date:
            raise ValidationError({"recurrence_end_date": "Only set this for recurring meetings."})

    def _cancellation_map(self):
        return {c.occurrence_date: c.reason for c in self.cancellations.all()}

    def _build_occurrence(self, occurrence_date, cancellation_map):
        occ_start = self.start_datetime.replace(
            year=occurrence_date.year,
            month=occurrence_date.month,
            day=occurrence_date.day,
        )
        occ_end = None
        if self.end_datetime:
            occ_end = occ_start + (self.end_datetime - self.start_datetime)
        is_cancelled = occurrence_date in cancellation_map
        return {
            "occurrence_date": occurrence_date,
            "start_datetime": occ_start,
            "end_datetime": occ_end,
            "is_cancelled": is_cancelled,
            "cancellation_reason": cancellation_map.get(occurrence_date) or None,
            "event_slug": self.slug,
            "event_title": self.title,
            "event_type": self.event_type,
            "summary": self.summary,
            "location": self.location,
        }

    def get_occurrences(self, from_date=None, to_date=None):
        cancellation_map = self._cancellation_map()
        start_date = self.start_datetime.date()

        if not self.is_recurring:
            if from_date and start_date < from_date:
                return []
            if to_date and start_date > to_date:
                return []
            return [self._build_occurrence(start_date, cancellation_map)]

        if not self.recurrence_end_date:
            return []

        range_start = max(start_date, from_date) if from_date else start_date
        range_end = min(self.recurrence_end_date, to_date) if to_date else self.recurrence_end_date

        if range_start > range_end:
            return []

        current = start_date
        while current < range_start:
            current += timedelta(days=7)

        occurrences = []
        while current <= range_end and current <= self.recurrence_end_date:
            occurrences.append(self._build_occurrence(current, cancellation_map))
            current += timedelta(days=7)

        return occurrences

    def is_valid_occurrence_date(self, occurrence_date):
        start_date = self.start_datetime.date()
        if not self.is_recurring:
            return occurrence_date == start_date
        if not self.recurrence_end_date:
            return False
        if occurrence_date < start_date or occurrence_date > self.recurrence_end_date:
            return False
        if occurrence_date.weekday() != start_date.weekday():
            return False
        return (occurrence_date - start_date).days % 7 == 0

    def delete(self, *args, **kwargs):
        poster_name = self.poster.name if self.poster else None
        super().delete(*args, **kwargs)
        if poster_name:
            File.objects.filter(filename=poster_name).delete()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['start_datetime']
        indexes = [
            models.Index(fields=['start_datetime']),
            models.Index(fields=['is_published', 'start_datetime']),
        ]


class EventCancellation(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="cancellations")
    occurrence_date = models.DateField(
        help_text="Calendar date of the skipped occurrence (e.g. 2026-03-14).",
    )
    reason = models.CharField(
        max_length=255, blank=True,
        help_text="Optional note shown on calendar (e.g. 'Spring break').",
    )

    def clean(self):
        super().clean()
        if not self.event.is_recurring:
            raise ValidationError({"event": "Cancellations only apply to recurring meetings."})
        if not self.event.is_valid_occurrence_date(self.occurrence_date):
            raise ValidationError({
                "occurrence_date": "Must be a valid occurrence date for this recurring meeting.",
            })

    def __str__(self):
        return f"{self.event.title} — {self.occurrence_date}"

    class Meta:
        ordering = ["occurrence_date"]
        constraints = [
            models.UniqueConstraint(
                fields=["event", "occurrence_date"],
                name="unique_event_cancellation_date",
            ),
        ]
