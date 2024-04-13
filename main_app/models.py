from django.db import models

# Create your models here.

class File(models.Model):
  bytes = models.TextField()
  filename = models.CharField(max_length=255)
  mimetype = models.CharField(max_length=50)

  def __str__(self):
    return self.filename
  

class SocialMedia(models.Model):
    SOCIAL_MEDIA_CHOICES = (
        ('linkedin', 'LinkedIn'),
        ('github', 'GitHub'),
        ('mail', 'Email'),
        ('instagram', 'Instagram'),
    )
    name = models.CharField(max_length=255, help_text="Phat's LinkedIn or Adam's Email")
    social_media = models.CharField(max_length=255,choices=SOCIAL_MEDIA_CHOICES)
    social_media_link = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    


class Member(models.Model):
    TEAM_CHOICES = (
        ('business', 'Business Team'),
        ('design', 'Design Team'),
        ('software', 'Software Team'),
    )
    name = models.CharField(max_length=255,help_text="Member full name")
    team = models.CharField(max_length=255,choices=TEAM_CHOICES)
    role = models.CharField(max_length=255,help_text="'Member' or 'Leader' or 'Member, 'Full Stack Developer'")
    social_medias = models.ManyToManyField(SocialMedia,blank=True)
    image = models.ImageField(upload_to='main_app.File/bytes/filename/mimetype', null=True, blank=True,help_text="Please compress image, convert type to webp and change size to 500x500 px before uploading. https://imagecompressor.com/, https://cloudconvert.com/webp-converter, https://imageresizer.com/")

    def delete(self, *args, **kwargs):
        super(Member, self).delete(*args, **kwargs)
        File.objects.filter(filename = self.image.name).delete()

    def __str__(self):
        return self.name
