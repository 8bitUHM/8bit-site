# example/urls.py
from django.urls import path

from main_app.views import index,members,services,join, projects

urlpatterns = [
  path("",index),
  path("services/",services),
  path("members/",members),
  path("join/",join),
  path("projects/", projects)
]