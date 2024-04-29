from django.db import models

# Create your models here.
class File(models.Model):
  bytes = models.TextField()
  filename = models.CharField(max_length=255)
  mimetype = models.CharField(max_length=50)

  def __str__(self):
    return self.filename

class Lesson(models.Model):
  name = models.CharField(max_length=256)
  slug = models.SlugField(unique=True)
  skills = models.CharField(max_length=256)
  image = models.ImageField(upload_to='learning.File/bytes/filename/mimetype', null=True, blank=True,help_text="Please compress image, convert type to webp and change size to 700x360 px before uploading. https://imagecompressor.com/, https://cloudconvert.com/webp-converter, https://imageresizer.com/")

  def delete(self, *args, **kwargs):
    super(Lesson, self).delete(*args, **kwargs)
    File.objects.filter(filename = self.image.name).delete()
  
  def __str__(self):
    return self.name
  
# class Section(models.Model):
#   name = models.CharField(max_length=256)