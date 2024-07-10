from django import forms
from .models import Loan
from customers.models import Customer
from vehicles.models import Vehicle
from datetime import timedelta, date

class LoanForm(forms.ModelForm):
    class Meta:
        model = Loan
        fields = ['loan_amount', 'interest_rate', 'term_months', 'start_date', 'customer', 'vehicle']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['customer'].queryset = Customer.objects.all()
        self.fields['vehicle'].queryset = Vehicle.objects.all()
        self.fields['monthly_payment'].disabled = True  # Make the monthly payment field read-only

    def clean(self):
        cleaned_data = super().clean()
        loan_amount = cleaned_data.get("loan_amount")
        interest_rate = cleaned_data.get("interest_rate")
        term_months = cleaned_data.get("term_months")
        start_date = cleaned_data.get("start_date")

        if loan_amount and interest_rate and term_months:
            monthly_rate = interest_rate / 100 / 12
            monthly_payment = loan_amount * monthly_rate / (1 - (1 + monthly_rate) ** -term_months)
            cleaned_data['monthly_payment'] = monthly_payment

            if start_date:
                end_date = start_date + timedelta(days=term_months * 30)
                cleaned_data['end_date'] = end_date

        return cleaned_data
