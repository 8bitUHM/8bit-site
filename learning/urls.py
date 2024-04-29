# example/urls.py
from django.urls import path

from learning.views import index,lesson

urlpatterns = [
  path("lessons/",index),
  path('lessons/<slug:slug>/', lesson, name='lesson'),
]