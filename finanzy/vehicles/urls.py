from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'vehicles', views.VehicleViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    path('vehicle_list/', views.vehicle_list, name='vehicle_list'),
    path('vehicles/<int:vehicle_id>/', views.vehicle_detail, name='vehicle_detail'),
]
