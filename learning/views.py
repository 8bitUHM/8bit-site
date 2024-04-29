from django.shortcuts import render, get_object_or_404, redirect
from .models import *
import json
from .serializers import LessonSerializer
from django.contrib.auth.decorators import user_passes_test
from django.contrib.auth.views import LoginView, LogoutView
from .forms import LoginForm
from django.urls import reverse_lazy
from django.contrib import messages
from .forms import CustomUserCreationForm

def staff_or_group_required(group_name=None):
  def check_user(user):
    if user.is_staff:
      return True
    if group_name:
      return user.groups.filter(name=group_name).exists()
    return False

  actual_decorator = user_passes_test(check_user, login_url='/learning/login/')
  return actual_decorator

# Create your views here.
@staff_or_group_required('Learning')
def index(request):
  username = request.user.username
  queryset = Lesson.objects.all()
  serializer = LessonSerializer(queryset, many=True)
  serialized_json_data = json.dumps(serializer.data)
  return render(request,'home.html',{"lessons":serialized_json_data,"username":username})

@staff_or_group_required('Learning')
def lesson(request,slug):
  username = request.user.username
  lesson = get_object_or_404(Lesson, slug=slug)
  return render(request, 'lesson.html', {"lesson" : lesson,"username":username })

class LearningLoginView(LoginView):
  template_name = "login.html"
  authentication_form = LoginForm
  
  def form_valid(self, form):
    user = form.get_user()
    if not user.is_staff and not user.groups.filter(name='Learning').exists():
      messages.error(self.request, "Please enter a correct username and password. Note that both fields may be case-sensitive.")
      return self.form_invalid(form)
    return super().form_valid(form)

  def get_success_url(self):
    return reverse_lazy('lessons_view')
  
class LearningLogoutView(LogoutView):
  next_page = '/'


def signup(request):
  if request.method == 'POST':
    form = CustomUserCreationForm(request.POST)
    if form.is_valid():
      form.save()
      return redirect('learning_login')  
  else:
    form = CustomUserCreationForm()
  return render(request, 'signup.html', {'form': form})