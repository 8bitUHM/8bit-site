# example/urls.py
from django.urls import path
from .views import GetMembers

urlpatterns = [
  path('members/', GetMembers.as_view(), name='get-members'),
]