from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models.functions import Lower

class GetMembers(APIView):
    def get(self, request):
        leaders = Member.objects.filter(is_leader=True).prefetch_related("social_medias").order_by('name')
        non_leaders = Member.objects.filter(is_leader=False).exclude(role="Member, Trainee Developer").prefetch_related("social_medias").order_by('name')
        trainee_developers = Member.objects.filter(is_leader=False, role="Member, Trainee Developer").prefetch_related("social_medias").order_by('name')
        
        queryset = list(leaders) + list(non_leaders) + list(trainee_developers)
        
        serializer = MemberSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)