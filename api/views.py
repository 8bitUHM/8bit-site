from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class GetMembers(APIView):
    def get(self, request):
        leaders = Member.objects.filter(is_leader=True).prefetch_related("social_medias")
        non_leaders = Member.objects.filter(is_leader=False).prefetch_related("social_medias")
        
        queryset = list(leaders) + list(non_leaders)
        
        serializer = MemberSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)