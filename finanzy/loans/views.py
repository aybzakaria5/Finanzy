from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Loan
from .forms import LoanForm
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from .serializers import LoanSerializer

# Create your views here.
@login_required
def loan_application(request):
    if request.method == 'POST':
        form = LoanForm(request.POST)
        if form.is_valid():
            loan = form.save(commit=False)
            loan.customer = request.user.customer
            loan.save()
            return redirect('loan_detail', loan_id=loan.id)
    else:
        form = LoanForm()
    return render(request, 'loan_application.html', {'form': form})

@login_required
def loan_detail(request, loan_id):
    loan = get_object_or_404(Loan, id=loan_id)
    return render(request, 'loan_detail.html', {'loan': loan})

@login_required
def loan_list(request):
    loans = Loan.objects.filter(customer=request.user.customer)
    return render(request, 'loan_list.html', {'loans': loans})


class LoanViewSet(viewsets.ModelViewSet):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
