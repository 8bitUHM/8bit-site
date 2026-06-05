from django.contrib import admin

from .models import *


class SocialMediaTabularInline(admin.TabularInline):
    model = SocialMedia
    extra = 1


class EventCancellationTabularInline(admin.TabularInline):
    model = EventCancellation
    extra = 0
    fields = ["occurrence_date", "reason"]


class MemberAdmin(admin.ModelAdmin):
    fieldsets = ((None, {"fields": ("name", "role", "image")}),)
    inlines = [SocialMediaTabularInline]
    list_display = ["name", "role"]

    def get_actions(self, request):
        actions = super().get_actions(request)
        if request.user.username[0].upper() != "J":
            if "delete_selected" in actions:
                del actions["delete_selected"]
        return actions


class ProjectAdmin(admin.ModelAdmin):
    list_display = ["name", "client", "in_development", "paid_client_project"]
    list_editable = ["in_development"]
    filter_horizontal = ["tags"]


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ["title", "event_type", "start_datetime", "is_recurring", "is_published"]
    list_filter = ["event_type", "is_published", "is_recurring"]
    list_editable = ["is_published"]
    search_fields = ["title", "summary", "location"]
    prepopulated_fields = {"slug": ["title"]}
    date_hierarchy = "start_datetime"
    fieldsets = (
        (None, {"fields": ("title", "slug", "event_type", "is_published")}),
        ("Schedule", {
            "fields": ("start_datetime", "end_datetime", "is_recurring", "recurrence_end_date", "location"),
            "description": (
                "For recurring meetings: set the first meeting date/time (e.g. first Friday 3pm), "
                "enable recurrence, and set the semester end date. Repeats weekly on the same weekday."
            ),
        }),
        ("Content", {"fields": ("summary", "description", "poster", "registration_link")}),
    )

    def get_inlines(self, request, obj=None):
        if obj and obj.is_recurring:
            return [EventCancellationTabularInline]
        return []


admin.site.register(Member, MemberAdmin)
admin.site.register(Project, ProjectAdmin)
