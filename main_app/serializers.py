from rest_framework import serializers
from main_app.models import *
from learning.serializers import TagSerializer

class SocialMediaSerializer(serializers.ModelSerializer):
  class Meta:
    model = SocialMedia
    fields = ['social_media', 'social_media_link']

class MemberSerializer(serializers.ModelSerializer):
  social_medias = SocialMediaSerializer(many=True)
  class Meta:
    model=Member
    fields = ['name', 'role', 'image', 'social_medias']

class ProjectSerializer(serializers.ModelSerializer):
  tags = TagSerializer(many=True)
  class Meta:
    model=Project
    fields = ['name', 'description', 'github_link', 'deploy_link', 'client', 'paid_client_project', 'in_development', 'tags']

class EventCancellationSerializer(serializers.ModelSerializer):
  class Meta:
    model = EventCancellation
    fields = ['occurrence_date', 'reason']

class EventSerializer(serializers.ModelSerializer):
  cancellations = EventCancellationSerializer(many=True, read_only=True)
  class Meta:
    model = Event
    fields = [
      'title', 'slug', 'summary', 'description', 'start_datetime', 'end_datetime',
      'location', 'registration_link', 'event_type', 'poster', 'is_published',
      'is_recurring', 'recurrence_end_date', 'cancellations',
    ]

class EventOccurrenceSerializer(serializers.Serializer):
  occurrence_date = serializers.DateField()
  start_datetime = serializers.DateTimeField()
  end_datetime = serializers.DateTimeField(allow_null=True)
  is_cancelled = serializers.BooleanField()
  cancellation_reason = serializers.CharField(allow_null=True)
  event_slug = serializers.CharField()
  event_title = serializers.CharField()
  event_type = serializers.CharField()
  summary = serializers.CharField()
  location = serializers.CharField()
