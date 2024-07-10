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
