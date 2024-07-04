from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Customer, Vehicle, Loan
from .forms import LoanForm
from django.contrib.auth.decorators import login_required

# Create your views here.
