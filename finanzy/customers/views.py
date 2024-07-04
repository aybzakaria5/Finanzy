from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Customer
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def customer_detail(request, customer_id):
    customer = get_object_or_404(Customer, id=customer_id)
    return render(request, 'customer_detail.html', {'customer': customer})
