from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from django.contrib.auth.models import User

class BasicAuthenticationTest(TestCase):
 
  def setUp(self):
    self.client = Client()

  def test_unauthenticated_endpoints(self):
    endpoints=['get-members']
    for endpoint in endpoints: 
      response = self.client.get(reverse(endpoint))
      self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

  def test_authenticated_endpoints(self):
    test_user_username='apiUser'
    test_user_password='apiPassword'
    User.objects.create_user(username=test_user_username, password=test_user_password)
    self.client.login(username=test_user_username, password=test_user_password)
    
    endpoints=['get-members']
    for endpoint in endpoints: 
      response = self.client.get(reverse(endpoint))
      self.assertEqual(response.status_code, status.HTTP_200_OK)
    
  
 
      