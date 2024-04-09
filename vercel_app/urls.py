"""vercel_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings
from db_file_storage.compat import url
from db_file_storage import views as db_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main_app.urls')),
    url(r'^download/', db_views.get_file, {'add_attachment_headers': True},
    name='db_file_storage.download_file'),
  url(r'^get/', db_views.get_file, {'add_attachment_headers': False},
     name='db_file_storage.get_file')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
