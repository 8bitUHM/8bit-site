from django.shortcuts import render, get_object_or_404
from .models import *
import json
from .serializers import LessonSerializer

def index(request):
  queryset = Lesson.objects.all().order_by('order')
  serializer = LessonSerializer(queryset, many=True)
  serialized_json_data = json.dumps(serializer.data)
  return render(request,'learning/pages/home.html',{"lessons":serialized_json_data})
  
def lesson(request,slug):
  lesson = get_object_or_404(Lesson, slug=slug)
  # section = get_object_or_404(Section,lesson=lesson,page=page)
  
  lesson_data = [lesson]
  lesson_serializer = LessonSerializer(lesson_data, many=True)
  serialized_lesson_data = json.dumps(lesson_serializer.data)
  
  # section_data = [section]
  # section_serializer = SectionSerializer(section_data,many=True)
  # serialized_section_data = json.dumps(section_serializer.data)
  
  return render(request, 'learning/pages/lesson.html', {"lesson" : serialized_lesson_data})

def quiz(request,slug):
  username = request.user.username
  lesson = get_object_or_404(Lesson, slug=slug)
  
  lesson_data = [lesson]
  lesson_serializer = LessonSerializer(lesson_data, many=True)
  serialized_lesson_data = json.dumps(lesson_serializer.data)
  
  
  return render(request, 'learning/pages/quiz.html', {"lesson" : serialized_lesson_data,"username":username })
