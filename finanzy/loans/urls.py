from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LoanViewSet, loan_application, loan_detail, loan_list

router = DefaultRouter()
router.register(r'loans', LoanViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('loan/application/', loan_application, name='loan_application'),
    path('loan/<int:loan_id>/', loan_detail, name='loan_detail'),
    path('loan/list/', loan_list, name='loan_list'),
]
