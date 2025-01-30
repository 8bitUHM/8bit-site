# example/urls.py
from django.urls import path

from learning.views import index,lesson,quiz

urlpatterns = [
  path("",index),
  # path("lessons/",index,name="lessons_view"),
  # path('lessons/<slug:slug>/<int:page>', lesson, name='lesson'),
  # path('lessons/<slug:slug>/quiz', quiz, name='lesson-quiz'),
]