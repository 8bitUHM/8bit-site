from django.test import TestCase
from django.core.exceptions import ValidationError
from main_app.models import Member

class MemberModelTestCase(TestCase):
    def test_create_member_without_name(self):
        b = Member(team='business', role='Member')
        b.save()
        # with self.assertRaises(ValidationError):
        #     b.save()
            
    def test_create_member_with_name(self):
        member = Member.objects.create(name='John Doe', team='business', role='Member')
        self.assertIsNotNone(member)