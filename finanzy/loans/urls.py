from django.urls import path
from . import views

urlpatterns = [
    path('apply/', views.loan_application, name='loan_application'),
    path('<int:loan_id>/', views.loan_detail, name='loan_detail'),
    path('', views.loan_list, name='loan_list'),
]
