from main_app.models import Member
from .serializers import MemberSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Case, When, Value, IntegerField

class GetMembers(APIView):
    def get(self, request):
        queryset = Member.objects.annotate(
            custom_order=Case(
                When(role='president', then=Value(1)),
                When(role='vice_president', then=Value(2)),
                When(role='treasurer', then=Value(3)),
                When(role='officer', then=Value(4)),
                default=Value(5),
                output_field=IntegerField(),
            )
        ).order_by('custom_order', 'name')

        serializer = MemberSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)
