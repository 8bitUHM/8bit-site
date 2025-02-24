# example/urls.py
from django.urls import path

from learning.views import index,lesson

urlpatterns = [
  path("",index),
  path("lessons/",index,name="lessons_view"),
  path('lessons/<slug:slug>', lesson, name='lesson'),
]