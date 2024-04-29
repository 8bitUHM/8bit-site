from django.shortcuts import render, get_object_or_404
from .models import *
import json
from .serializers import LessonSerializer

# Create your views here.
def index(request):
  queryset = Lesson.objects.all()
  serializer = LessonSerializer(queryset, many=True)
  serialized_json_data = json.dumps(serializer.data)
  return render(request,'home.html',{"lessons":serialized_json_data})

def lesson(request,slug):
  lesson = get_object_or_404(Lesson, slug=slug)
  return render(request, 'lesson.html', {"lesson" : lesson, })
