# from django.urls import path
# from . import views

# urlpatterns = [
#     path('payments/', views.payment_list, name='payment_list'),
#     path('payment/<int:payment_id>/', views.payment_detail, name='payment_detail'),
#     path('loan/<int:loan_id>/payment/', views.payment_create, name='payment_create'),
# ]


from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PaymentViewSet

router = DefaultRouter()
router.register(r'payments', PaymentViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
