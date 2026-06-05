# example/urls.py
from django.urls import path

from main_app.views import index, members, services, join, projects, events, event_detail

urlpatterns = [
  path("",index),
  path("services/",services),
  path("members/",members),
  path("join/",join),
  path("projects/", projects),
  path("events/", events),
  path("events/<slug:slug>/", event_detail),
]