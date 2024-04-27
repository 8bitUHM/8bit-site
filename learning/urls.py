# example/urls.py
from django.urls import path

from learning.views import index

urlpatterns = [
  path("",index),
]