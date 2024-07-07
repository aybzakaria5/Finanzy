from django.db import models
from customers.models import Customer
from vehicles.models import Vehicle
import math

# Create your models here.
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

    def calculate_monthly_payment(self):
        # Convert annual interest rate to a monthly rate
        monthly_interest_rate = float(self.interest_rate) / 100 / 12
        # Calculate the monthly payment using the hire purchase formula
        self.monthly_payment = (
            float(self.loan_amount) * monthly_interest_rate /
            (1 - math.pow(1 + monthly_interest_rate, -self.term_months))
        )
        return self.monthly_payment

    def save(self, *args, **kwargs):
        self.calculate_monthly_payment()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Loan for {self.customer.user.username} - {self.vehicle}"
    