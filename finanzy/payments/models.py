from django.db import models
from finanzy.loans.models import Loan

# Create your models here.
class Payment(models.Model):
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE)
    payment_date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Payment of {self.amount} on {self.payment_date}"
