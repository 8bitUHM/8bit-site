from django.db import models

# Create your models here.
class File(models.Model):
  bytes = models.TextField()
  filename = models.CharField(max_length=255)
  mimetype = models.CharField(max_length=50)

  def __str__(self):
    return self.filename

class Tag(models.Model):
    tag_name = models.CharField(max_length=255)

    def __str__(self):
      return self.tag_name

    class Meta:
        ordering = ['tag_name']

class Lesson(models.Model):
  name = models.CharField(max_length=256)
  slug = models.SlugField(unique=True, blank=True, null=True,)
  order = models.IntegerField(unique=True, blank=False, null=True)
  completion_time = models.CharField(max_length=50)
  tags = models.ManyToManyField(Tag, blank=True)
  description = models.TextField(max_length=500)

  def __str__(self):
    return self.name

class LessonVideo(models.Model):

  VIDEO_TYPE_CHOICES = (
    ('concept','Concept'),
    ('follow_along', 'Follow along'),
)

  title = models.CharField(max_length=256)
  short_description = models.TextField(max_length=500, blank=True, null=True)
  type = models.CharField(max_length=15, choices=VIDEO_TYPE_CHOICES, default="follow_along")
  video_embed_link = models.URLField()
  lesson = models.ForeignKey(Lesson,on_delete=models.CASCADE, related_name="lesson_videos")

  def __str__(self):
    return self.title
