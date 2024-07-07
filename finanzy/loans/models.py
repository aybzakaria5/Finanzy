from django.db import models
from customers.models import Customer
from vehicles.models import Vehicle
import math
from datetime import timedelta, date

class Loan(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    loan_amount = models.DecimalField(max_digits=10, decimal_places=2)
    interest_rate = models.DecimalField(max_digits=5, decimal_places=2)
    term_months = models.IntegerField()
    monthly_payment = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    daily_payment = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    paid_off = models.BooleanField(default=False)
    early_repayment_discount = models.DecimalField(max_digits=5, decimal_places=2, default=5.0)  # Discount rate as a percentage

    def calculate_monthly_payment(self):
        monthly_interest_rate = float(self.interest_rate) / 100 / 12
        self.monthly_payment = (
            float(self.loan_amount) * monthly_interest_rate /
            (1 - math.pow(1 + monthly_interest_rate, -self.term_months))
        )
        return self.monthly_payment

    def calculate_daily_payment(self):
        self.calculate_monthly_payment()
        total_payment = self.monthly_payment * self.term_months
        self.daily_payment = total_payment / (self.term_months * 30)
        return self.daily_payment

    def calculate_early_repayment_amount(self):
        remaining_balance = self.loan_amount
        discount = (float(self.early_repayment_discount) / 100) * remaining_balance
        return remaining_balance - discount

    def save(self, *args, **kwargs):
        self.calculate_monthly_payment()
        self.calculate_daily_payment()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Loan for {self.customer.user.username} - {self.vehicle}"
