# example/views.py
from django.shortcuts import render, get_object_or_404
from .serializers import MemberSerializer, ProjectSerializer, EventSerializer
from .models import *
from django.db.models import Case, When, Value, IntegerField
import json

def index(request):
  return render(request,'main_app/pages/home.html')

def members(request):
  queryset = Member.objects.annotate(
    custom_order=Case(
      When(role='president', then=Value(1)),
      When(role='vice_president', then=Value(2)),
      When(role='treasurer', then=Value(3)),
      When(role='officer', then=Value(4)),
      default=Value(5),
      output_field=IntegerField(),
    )
  ).order_by('custom_order', 'name')

  serializer = MemberSerializer(queryset, many=True)
  serialized_json_data = json.dumps(serializer.data)

  return render(request, 'main_app/pages/members.html', {'members': serialized_json_data})

def services(request):
  return render(request,'main_app/pages/services.html')

def join(request):
  return render(request,'main_app/pages/join.html')

def projects(request):
  queryset = Project.objects.annotate().order_by('name')

  serializer = ProjectSerializer(queryset, many=True)
  serialized_json_data = json.dumps(serializer.data)

  return render(request, 'main_app/pages/projects.html', {'projects': serialized_json_data})

def events(request):
  queryset = Event.objects.filter(is_published=True).prefetch_related('cancellations').order_by('start_datetime')
  serializer = EventSerializer(queryset, many=True)
  serialized_json_data = json.dumps(serializer.data)
  return render(request, 'main_app/pages/events.html', {'events': serialized_json_data})

def event_detail(request, slug):
  event = get_object_or_404(Event, slug=slug, is_published=True)
  serializer = EventSerializer(event)
  serialized_json_data = json.dumps(serializer.data)
  return render(request, 'main_app/pages/event-detail.html', {
    'event': serialized_json_data,
    'event_title': event.title,
  })