from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'vehicles', views.VehicleViewSet)

urlpatterns = [
    path('api/', include(router.urls)),  # Include all URLs from the router under the 'api/' prefix
    path('vehicle/list/', views.vehicle_list, name='vehicle_list'),  # Function-based view for listing vehicles
    path('vehicle/<int:vehicle_id>/', views.vehicle_detail, name='vehicle_detail'),  # Function-based view for vehicle details
    # Directly map 'list' and 'create' actions of VehicleViewSet to URLs
    path('api/vehicles/', views.VehicleViewSet.as_view({'get': 'list', 'post': 'create'}), name='vehicle_api_list'),
    # Directly map 'retrieve', 'update', and 'destroy' actions of VehicleViewSet to URLs
    path('api/vehicles/<int:pk>/', views.VehicleViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='vehicle_api_detail'),
]
