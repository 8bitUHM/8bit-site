# example/urls.py
from django.urls import path

from learning.views import index,lesson

urlpatterns = [
  path("",index),
  path('<slug:slug>/', lesson, name='lesson'),
]