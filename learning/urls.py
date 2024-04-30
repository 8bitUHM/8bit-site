# example/urls.py
from django.urls import path

from learning.views import index,lesson, LearningLoginView,LearningLogoutView, signup

urlpatterns = [
  path("",index),
  path("lessons/",index,name="lessons_view"),
  path('lessons/<slug:slug>/<int:page>', lesson, name='lesson'),
  path('login/', LearningLoginView.as_view(), name='learning_login'),
  path('logout/', LearningLogoutView.as_view(), name='learning_logout'),
  path('signup/', signup, name='signup'),
]