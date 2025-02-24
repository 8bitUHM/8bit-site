from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class File(models.Model):
  bytes = models.TextField()
  filename = models.CharField(max_length=255)
  mimetype = models.CharField(max_length=50)

  def __str__(self):
    return self.filename

class Tag(models.Model):
    COLOR_CHOICES = (
      ('bg-primary', 'Technical Skill (Blue)'),
      ('bg-secondary', 'Technical Concept (Grey)')
    )

    tag_name = models.CharField(max_length=255)
    color = models.CharField(max_length=50, choices=COLOR_CHOICES, default='bg-primary')

    def __str__(self):
      return self.tag_name

class Lesson(models.Model):
  name = models.CharField(max_length=256)
  slug = models.SlugField(unique=True, blank=True, null=True,)
  order = models.IntegerField(unique=True, blank=False, null=True)
  completion_time = models.CharField(max_length=50)
  tags = models.ManyToManyField(Tag, blank=True)
  description = models.TextField(max_length=500)
  image = models.ImageField(upload_to='learning.File/bytes/filename/mimetype', null=True, blank=True,help_text="Please compress image, convert type to webp and change size to 700x360 px before uploading. https://imagecompressor.com/, https://cloudconvert.com/webp-converter, https://imageresizer.com/")

  def delete(self, *args, **kwargs):
    super(Lesson, self).delete(*args, **kwargs)
    File.objects.filter(filename = self.image.name).delete()
  
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