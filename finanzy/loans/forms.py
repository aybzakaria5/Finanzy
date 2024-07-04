from django import forms
from .models import Loan

class LoanForm(forms.ModelForm):
    class Meta:
        model = Loan
        fields = ['vehicle', 'loan_amount', 'interest_rate', 'term_months', 'start_date', 'end_date']
