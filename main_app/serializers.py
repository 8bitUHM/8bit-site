from rest_framework import serializers
from main_app.models import *
from learning.serializers import TagSerializer

class SocialMediaSerializer(serializers.ModelSerializer):
  class Meta:
    model = SocialMedia
    fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
  social_medias = SocialMediaSerializer(many=True)
  class Meta:
    model=Member
    fields = '__all__'
    
class ProjectSerializer(serializers.ModelSerializer):
  tags = TagSerializer(many=True)
  class Meta:
    model=Project
    fields='__all__'