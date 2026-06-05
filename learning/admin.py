from django.contrib import admin
from .models import *


class LessonVideoTabularInline(admin.TabularInline):
    model = LessonVideo
    extra = 1


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ["tag_name"]
    search_fields = ["tag_name"]


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ["name", "order", "completion_time"]
    list_editable = ["order"]
    ordering = ["order"]
    filter_horizontal = ["tags"]
    prepopulated_fields = {"slug": ["name"]}
    inlines = [LessonVideoTabularInline]
    fieldsets = (
        (None, {"fields": ("name", "slug", "order", "completion_time")}),
        ("Content", {"fields": ("description",)}),
        ("Tags", {"fields": ("tags",)}),
    )
