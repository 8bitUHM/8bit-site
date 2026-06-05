from rest_framework import serializers
from learning.models import *

class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = ['tag_name']

class LessonVideoSerializer(serializers.ModelSerializer):
  class Meta:
    model = LessonVideo
    fields = ['title', 'short_description', 'type', 'video_embed_link']

class LessonSerializer(serializers.ModelSerializer):
  lesson_videos = LessonVideoSerializer(many=True)
  tags = TagSerializer(many=True)
  class Meta:
    model = Lesson
    fields = ['name', 'slug', 'order', 'completion_time', 'description', 'tags', 'lesson_videos']
