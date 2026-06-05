from rest_framework import serializers
from main_app.models import *

class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMedia
        fields = ['social_media', 'social_media_link']

class MemberSerializer(serializers.ModelSerializer):
    social_medias = SocialMediaSerializer(many=True)
    class Meta:
        model=Member
        fields = ['name', 'role', 'image', 'social_medias']
