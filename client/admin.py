from django.contrib import admin
from .models import *
# Register your models here.

class ProjectUpdateInline(admin.StackedInline):
  model = ProjectUpdate

class ContactPersonInline(admin.StackedInline):
  model = ContactPerson
  
class ProjectAccountInline(admin.StackedInline):
  model = ProjectAccount

class ProjectAdmin(admin.ModelAdmin):
  inlines=[ProjectUpdateInline, ContactPersonInline,ProjectAccountInline]

admin.site.register(Client)
admin.site.register(Project,ProjectAdmin)
# admin.site.register(ContactPerson)

