# example/views.py
from datetime import datetime
from django.contrib.auth.views import LoginView
from django.http import HttpResponse
from .forms import LoginForm
from django.shortcuts import render
from django.urls import reverse_lazy


def index(request):
  return render(request,'index.html')

# def about(request):
#   return render(request,'about.html')

def members(request):
  return render(request,'members.html')

def services(request):
  return render(request,'services.html')

class MemberLoginView(LoginView):
  template_name = "member-login.html"
  authentication_form = LoginForm
  def get_success_url(self):
    return reverse_lazy('admin:index') 
