from django.contrib import admin
from .models import *

class SectionStackedInline(admin.StackedInline):
  model=Section

class LessonAdmin(admin.ModelAdmin):
  filter_horizontal = ["tags"]
  prepopulated_fields = {"slug": ["name"]}
  inlines=[SectionStackedInline]
  
admin.site.register(Tag)
admin.site.register(Lesson,LessonAdmin)
admin.site.register(Section)