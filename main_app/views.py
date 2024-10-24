# example/views.py
from django.contrib.auth.views import LoginView, LogoutView
from .forms import LoginForm
from django.shortcuts import render
from django.urls import reverse_lazy
from .serializers import MemberSerializer, ProjectSerializer
from .models import *
from django.db.models import Case, When, Value, IntegerField
import json
from django.contrib import messages

def index(request):
  return render(request,'main_app/pages/home.html')

# def about(request):
#   return render(request,'about.html')

def members(request):
  queryset = Member.objects.annotate(
    custom_order=Case(
      When(is_leader=True, then=Value(1)),
      default=Value(2),
      output_field=IntegerField(),
    )
  ).order_by('custom_order', 'name')

  serializer = MemberSerializer(queryset, many=True)
  serialized_json_data = json.dumps(serializer.data)

  return render(request, 'main_app/pages/members.html', {'members': serialized_json_data})

def services(request):
  return render(request,'main_app/pages/services.html')


class MemberLoginView(LoginView):
  template_name = "main_app/pages/member-login.html"
  authentication_form = LoginForm

  def form_valid(self, form):
    user = form.get_user()
    if not user.is_staff:
      messages.error(self.request, "Only staff members can login.")
      return self.form_invalid(form)
    return super().form_valid(form)

  def get_success_url(self):
    return reverse_lazy('admin:index')
  
class MemberLogoutView(LogoutView):
  next_page = '/'

def join(request):
  return render(request,'main_app/pages/join.html')

def projects(request):
  queryset = Project.objects.annotate().order_by('name')

  serializer = ProjectSerializer(queryset, many=True)
  serialized_json_data = json.dumps(serializer.data)

  return render(request, 'main_app/pages/projects.html', {'projects': serialized_json_data})