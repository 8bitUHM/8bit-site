from django.shortcuts import render, get_object_or_404
from .models import *

# Create your views here.
def index(request):
  lessons = Lesson.objects.all()
  return render(request,'home.html',{"lessons":lessons})

def lesson(request,slug):
  lesson = get_object_or_404(Lesson, slug=slug)
  
  return render(request, 'lesson.html', {"lesson" : lesson, })