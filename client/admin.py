from django.contrib import admin
from .models import *
# Register your models here.

class ContactPersonInline(admin.StackedInline):
  model = ContactPerson

class ProjectAdmin(admin.ModelAdmin):
  inlines=[ContactPersonInline]

admin.site.register(Client)
admin.site.register(Project,ProjectAdmin)
# admin.site.register(ContactPerson)

