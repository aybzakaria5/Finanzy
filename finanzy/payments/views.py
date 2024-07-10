from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Payment
from loans.models import Loan
from .forms import PaymentForm
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from .serializers import PaymentSerializer

# Create your views here.
@login_required
def payment_list(request):
    payments = Payment.objects.filter(loan__customer=request.user.customer)
    return render(request, 'payment_list.html', {'payments': payments})

@login_required
def payment_detail(request, payment_id):
    payment = get_object_or_404(Payment, id=payment_id)
    return render(request, 'payment_detail.html', {'payment': payment})

@login_required
def payment_create(request, loan_id):
    loan = get_object_or_404(Loan, id=loan_id)
    if request.method == 'POST':
        form = PaymentForm(request.POST)
        if form.is_valid():
            payment = form.save(commit=False)
            payment.loan = loan
            payment.save()
            return redirect('payment_detail', payment_id=payment.id)
    else:
        form = PaymentForm()
    return render(request, 'payment_create.html', {'form': form, 'loan': loan})


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
