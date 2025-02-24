from django.contrib import admin
from .models import *

class LessonVideoStackedInline(admin.StackedInline):
  model=LessonVideo

class LessonAdmin(admin.ModelAdmin):
  filter_horizontal = ["tags"]
  prepopulated_fields = {"slug": ["name"]}
  inlines=[LessonVideoStackedInline]
  
admin.site.register(Tag)
admin.site.register(Lesson,LessonAdmin)
admin.site.register(LessonVideo)