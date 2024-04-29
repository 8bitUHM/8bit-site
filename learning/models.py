from django.db import models

# Create your models here.
class Lesson(models.Model):
  name = models.CharField(max_length=256)
  slug = models.SlugField(unique=True)
  
  def __str__(self):
    return self.name
  
# class Section(models.Model):
#   name = models.CharField(max_length=256)