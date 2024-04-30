from django.contrib import admin
from .models import *

class SectionStackedInline(admin.StackedInline):
  model=Section

class LessonAdmin(admin.ModelAdmin):
  prepopulated_fields = {"slug": ["name"]}
  inlines=[SectionStackedInline]
  
  
admin.site.register(Lesson,LessonAdmin)
admin.site.register(Section)