from django.contrib import admin
from .models import *

# Register your models here.

class LessonAdmin(admin.ModelAdmin):
  prepopulated_fields = {"slug": ["name"]}
  
  
admin.site.register(Lesson,LessonAdmin)