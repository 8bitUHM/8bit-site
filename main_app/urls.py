# example/urls.py
from django.urls import path

from main_app.views import index,members,services,about

urlpatterns = [
  path("",index),
  path("about/",about),
  path("services/",services),
  path("members/",members),
]