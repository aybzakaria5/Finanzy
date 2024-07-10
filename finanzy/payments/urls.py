from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PaymentViewSet, payment_list, payment_detail, payment_create

router = DefaultRouter()
router.register(r'payments', PaymentViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('payment/list/', payment_list, name='payment_list'),
    path('payment/<int:payment_id>/', payment_detail, name='payment_detail'),
    path('payment/create/<int:loan_id>/', payment_create, name='payment_create'),
]

from django.urls import path
from . import views

urlpatterns = [
    path('payments/', views.payment_list, name='payment_list'),
    path('payments/<int:payment_id>/', views.payment_detail, name='payment_detail'),
    path('loan/<int:loan_id>/payment/create/', views.payment_create, name='payment_create'),
    # The PaymentViewSet for API access
    # Typically use a router for viewsets, but here's a basic approach:
    path('api/payments/', views.PaymentViewSet.as_view({'get': 'list', 'post': 'create'}), name='payment_api_list'),
    path('api/payments/<int:pk>/', views.PaymentViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='payment_api_detail'),
]