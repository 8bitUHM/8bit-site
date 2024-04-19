from rest_framework import serializers
from main_app.models import *

class SocialMediaSerializer(serializers.ModelSerializer):
  class Meta:
    model = SocialMedia
    fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
  social_medias = SocialMediaSerializer(many=True)
  class Meta:
    model=Member
    fields = '__all__'