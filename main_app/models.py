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
    TEAM_CHOICES = (
        ('business', 'Business Team'),
        ('design', 'Design Team'),
        ('software', 'Software Team'),
    )
    name = models.CharField(max_length=255,help_text="Member full name")
    team = models.CharField(max_length=255,choices=TEAM_CHOICES)
    is_leader = models.BooleanField(default=False)
    image = models.ImageField(upload_to='main_app.File/bytes/filename/mimetype', null=True, blank=True,help_text="Please compress image, convert type to webp and change size to 500x500 px before uploading. https://imagecompressor.com/, https://cloudconvert.com/webp-converter, https://imageresizer.com/")

    def delete(self, *args, **kwargs):
        super(Member, self).delete(*args, **kwargs)
        File.objects.filter(filename = self.image.name).delete()

    def __str__(self):
        return self.name
    
class SocialMedia(models.Model):
    SOCIAL_MEDIA_CHOICES = (
        ('linkedin', 'LinkedIn'),
        ('github', 'GitHub'),
        ('mail', 'Email'),
        ('instagram', 'Instagram'),
    )
    name = models.CharField(max_length=255, help_text="Phat's LinkedIn or Adam's Email")
    social_media = models.CharField(max_length=255, choices=SOCIAL_MEDIA_CHOICES)
    social_media_link = models.CharField(max_length=255)
    member = models.ForeignKey(Member,on_delete=models.CASCADE,related_name="social_medias")

    def __str__(self):
        return self.name

    class Meta:
        ordering = [
            'social_media'
        ]
        
class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='main_app.File/bytes/filename/mimetype', null=True, blank=True,help_text="Please compress image, convert type to webp and change size to 500x500 px before uploading. https://imagecompressor.com/, https://cloudconvert.com/webp-converter, https://imageresizer.com/")
    github_link = models.URLField(max_length=1000)
    deploy_link = models.URLField(max_length=1000, null=True, blank=True)
    client = models.CharField(max_length=255, null=True, blank=True)
    paid_client_project = models.BooleanField(default=False)
    tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self):
        return self.name
    
    def delete(self, *args, **kwargs):
        super(Project, self).delete(*args, **kwargs)
        File.objects.filter(filename = self.image.name).delete()
    
    class Meta:
        ordering = ['name']
