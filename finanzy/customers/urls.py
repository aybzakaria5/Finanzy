from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet, customer_detail

router = DefaultRouter()
router.register(r'customers', CustomerViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('customer/<int:customer_id>/', customer_detail, name='customer_detail'),
]
