from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LoanViewSet

router = DefaultRouter()
router.register(r'loan', LoanViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]

