from django.db import models
from django.contrib.auth.models import User
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

    def __str__(self):
        return f"Loan for {self.customer.user.username} - {self.vehicle}"
