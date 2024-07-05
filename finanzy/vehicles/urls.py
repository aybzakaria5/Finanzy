from django.urls import path
from . import views

urlpatterns = [
    path('', views.vehicle_list, name='vehicle_list'),
    path('<int:vehicle_id>/', views.vehicle_detail, name='vehicle_detail'),
]
