from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models.functions import Lower

class GetMembers(APIView):
    def get(self, request):
        leaders = Member.objects.filter(is_leader=True).prefetch_related("social_medias")
        non_leaders = Member.objects.filter(is_leader=False).prefetch_related("social_medias").order_by(Lower('name'))
        
        queryset = list(leaders) + list(non_leaders)
        
        serializer = MemberSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)