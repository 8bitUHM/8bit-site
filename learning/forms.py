from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import Group, User
from django.utils.translation import gettext_lazy as _


class LoginForm(AuthenticationForm):
  username = forms.CharField(
      widget=forms.TextInput(
          attrs={
              
              "class": "form-control form-control-lg",
          }
      )
  )
  password = forms.CharField(
      widget=forms.PasswordInput(
          attrs={
              "class": "form-control form-control-lg",
          }
      )
  )
  
  
class CustomUserCreationForm(UserCreationForm):
    default_group_name = "Learning"  # Set the default group name

    def __init__(self, *args, **kwargs):
      super().__init__(*args, **kwargs)
      # Apply class attributes to the fields
      for field_name, field in self.fields.items():
        field.widget.attrs.update(attrs)

    class Meta(UserCreationForm.Meta):
      model = User
      fields = ("username", "password1", "password2")  # Only username and password fields

    def save(self, commit=True):
      user = super().save(commit=False)
      if commit:
        user.save()
        default_group = Group.objects.get(name=self.default_group_name)
        user.groups.add(default_group)
      return user

attrs = {
    "class": "form-control form-control-lg",
}