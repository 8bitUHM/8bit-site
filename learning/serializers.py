from rest_framework import serializers
from learning.models import *

class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = '__all__'
    
class LessonVideoSerializer(serializers.ModelSerializer):
  class Meta:
    model = LessonVideo
    fields = '__all__'

class LessonSerializer(serializers.ModelSerializer):
  # sections = SectionSerializer(many=True)
  lesson_videos=LessonVideoSerializer(many=True)
  tags = TagSerializer(many=True)
  class Meta:
    model = Lesson
    fields = '__all__'
    
