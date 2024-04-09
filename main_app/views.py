# example/views.py
from datetime import datetime
from django.contrib.auth.views import LoginView
from django.http import HttpResponse
from .forms import LoginForm

class CustomLoginView(LoginView):
    template_name = "index.html"
    authentication_form = LoginForm  
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

