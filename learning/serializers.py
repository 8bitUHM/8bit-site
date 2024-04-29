from rest_framework import serializers
from learning.models import *

class LessonSerializer(serializers.ModelSerializer):
  class Meta:
    model = Lesson
    fields = '__all__'