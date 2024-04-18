from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models.functions import Lower
from django.db.models import Case, When, Value, IntegerField

class GetMembers(APIView):
    def get(self, request):
        queryset = Member.objects.annotate(
            custom_order=Case(
                When(is_leader=True, then=Value(1)),
                When(role="Member, Trainee Developer", then=Value(3)),
                default=Value(2),
                output_field=IntegerField(),
            )
        ).order_by('custom_order', 'name')

        serializer = MemberSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)