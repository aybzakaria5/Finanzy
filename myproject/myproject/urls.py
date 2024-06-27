# myproject/urls.py
from django.contrib import admin
from django.urls import path
from contact.views import contact_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact/', contact_view, name='contact'),
    # path('users/', include('users.urls')),
]
