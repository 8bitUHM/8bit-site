from django.db import models

class Client(models.Model):
  name = models.CharField(max_length=255,help_text="Name of client")
  
  def __str__(self):
    return self.name
  
class Project(models.Model):
  STATUS_CHOICES = (
    ('NS', 'Have not started'),
    ('IP', 'In progress'),
    ('CO', 'Project completed'),
  )
  name  = models.CharField(max_length=255, help_text="Short name for the project eg. Learning Emporium Website")
  description = models.TextField(max_length=2000,help_text="Short description of what the project is, what we're doing for the project")
  client = models.ForeignKey(Client,on_delete=models.CASCADE,help_text="The client we are doing project for")
  status = models.CharField(max_length=255, choices=STATUS_CHOICES, help_text="Status of the project")
  # Many to one reference to contact person model
  
  def __str__(self):
    return self.name
  
class ContactPerson(models.Model):
  name = models.CharField(max_length=255, help_text="Name of contact person")
  email = models.CharField(max_length=255,blank=True,null=True, help_text="Email of contact person")
  phone_number = models.CharField(max_length=255,blank=True,null=True, help_text="phone_number of contact person")
  client = models.ForeignKey(Project,on_delete=models.CASCADE,null=True)
  
  def __str__(self):
    return self.name