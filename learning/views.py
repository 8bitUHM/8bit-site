from django.shortcuts import render, get_object_or_404, redirect
from .models import *
import json
from .serializers import LessonSerializer, SectionSerializer
from django.http import HttpResponse





# Create your views here.

# def index(request):
#   username = request.user.username
#   queryset = Lesson.objects.all()
#   serializer = LessonSerializer(queryset, many=True)
#   serialized_json_data = json.dumps(serializer.data)
#   return render(request,'learning/pages/home.html',{"lessons":serialized_json_data,"username":username})
def index(request):
  html_content = """
  <html>
    <head>
      <meta http-equiv="refresh" content="5;url=/">
    </head>
    <body>
      <h2>This part of the site is closed for construction.</h2>
      <p>You will be redirected back to the home page in 5 seconds...</p>
    </body>
  </html>
  """
  return HttpResponse(html_content)
  

def lesson(request,slug,page):
  username = request.user.username
  lesson = get_object_or_404(Lesson, slug=slug)
  section = get_object_or_404(Section,lesson=lesson,page=page)
  
  lesson_data = [lesson]
  lesson_serializer = LessonSerializer(lesson_data, many=True)
  serialized_lesson_data = json.dumps(lesson_serializer.data)
  
  section_data = [section]
  section_serializer = SectionSerializer(section_data,many=True)
  serialized_section_data = json.dumps(section_serializer.data)
  
  return render(request, 'learning/pages/lesson.html', {"lesson" : serialized_lesson_data,"section":serialized_section_data,"username":username })

def quiz(request,slug):
  username = request.user.username
  lesson = get_object_or_404(Lesson, slug=slug)
  
  lesson_data = [lesson]
  lesson_serializer = LessonSerializer(lesson_data, many=True)
  serialized_lesson_data = json.dumps(lesson_serializer.data)
  
  
  return render(request, 'learning/pages/quiz.html', {"lesson" : serialized_lesson_data,"username":username })
