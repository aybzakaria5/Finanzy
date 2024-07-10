from django.core.exceptions import ValidationError
from django.db import models
from customers.models import Customer
from vehicles.models import Vehicle
import math

class Loan(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    loan_amount = models.DecimalField(max_digits=10, decimal_places=2)
    interest_rate = models.DecimalField(max_digits=5, decimal_places=2)
    term_months = models.IntegerField()
    monthly_payment = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    paid_off = models.BooleanField(default=False)

    def clean(self):
        # Validation to ensure positive values
        if self.loan_amount <= 0:
            raise ValidationError({'loan_amount': 'Loan amount must be positive.'})
        if self.interest_rate < 0:  # Allowing 0% interest
            raise ValidationError({'interest_rate': 'Interest rate cannot be negative.'})
        if self.term_months <= 0:
            raise ValidationError({'term_months': 'Term months must be positive.'})

    def calculate_monthly_payment(self):
        # Convert annual interest rate to a monthly rate
        monthly_interest_rate = float(self.interest_rate) / 100 / 12
        if monthly_interest_rate == 0:  # Handling 0% interest rate
            self.monthly_payment = float(self.loan_amount) / self.term_months
        else:
            # Calculate the monthly payment using the hire purchase formula
            self.monthly_payment = (
                float(self.loan_amount) * monthly_interest_rate /
                (1 - math.pow(1 + monthly_interest_rate, -self.term_months))
            )
        # Rounding the monthly payment to match the decimal places defined in the field
        self.monthly_payment = round(self.monthly_payment, 2)

    def save(self, *args, **kwargs):
        self.full_clean()  # Call full_clean to run clean method and validate model instance
        self.calculate_monthly_payment()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Loan for {self.customer.user.username} - {self.vehicle}"
    