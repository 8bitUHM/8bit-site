from rest_framework import serializers
from learning.models import *

class SectionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Section
    fields = '__all__'

class LessonSerializer(serializers.ModelSerializer):
  sections = SectionSerializer(many=True)
  class Meta:
    model = Lesson
    fields = '__all__'
    
