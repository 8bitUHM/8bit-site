# example/urls.py
from django.urls import path

from main_app.views import CustomLoginView

urlpatterns = [
  path("",CustomLoginView.as_view(),name="login",),
]