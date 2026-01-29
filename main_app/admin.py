from django.contrib import admin

from .models import *

class SocialMediaStackedInline(admin.StackedInline):
    model=SocialMedia

class MemberAdmin(admin.ModelAdmin):
    inlines=[SocialMediaStackedInline]
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

admin.site.register(SocialMedia)
admin.site.register(Member,MemberAdmin)
admin.site.register(Project,ProjectAdmin)
