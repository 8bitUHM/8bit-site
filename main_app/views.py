# example/views.py
from datetime import datetime
from django.contrib.auth.views import LoginView, LogoutView
from django.http import HttpResponse
from .forms import LoginForm
from django.shortcuts import render
from django.urls import reverse_lazy
from .serializers import MemberSerializer
from .models import *
from django.db.models import Case, When, Value, IntegerField
from rest_framework.renderers import JSONRenderer
import json

def index(request):
  return render(request,'index.html')

# def about(request):
#   return render(request,'about.html')

def members(request):
  queryset = Member.objects.annotate(
    custom_order=Case(
      When(is_leader=True, then=Value(1)),
      When(role="Member, Trainee Developer", then=Value(3)),
      default=Value(2),
      output_field=IntegerField(),
    )
  ).order_by('custom_order', 'name')

  serializer = MemberSerializer(queryset, many=True)
  serialized_json_data = json.dumps(serializer.data)

  return render(request, 'members.html', {'members': serialized_json_data})

def services(request):
  return render(request,'services.html')

class MemberLoginView(LoginView):
  template_name = "member-login.html"
  authentication_form = LoginForm
  def get_success_url(self):
    return reverse_lazy('admin:index')
  
class MemberLogoutView(LogoutView):
  next_page = '/'
