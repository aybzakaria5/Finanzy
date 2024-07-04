from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Vehicle

# Create your views here.
def vehicle_list(request):
    vehicles = Vehicle.objects.filter(available=True)
    return render(request, 'vehicle_list.html', {'vehicles': vehicles})

def vehicle_detail(request, vehicle_id):
    vehicle = get_object_or_404(Vehicle, id=vehicle_id)
    return render(request, 'vehicle_detail.html', {'vehicle': vehicle})
