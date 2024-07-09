# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.vehicle_list, name='vehicle_list'),
#     path('<int:vehicle_id>/', views.vehicle_detail, name='vehicle_detail'),
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VehicleViewSet

router = DefaultRouter()
router.register(r'veichles', VehicleViewSet)

urlpatterns = [
    path('api', include(router.urls)),
]