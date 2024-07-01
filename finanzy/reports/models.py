from django.db import models
import math

# Create your models here.
class FinancialReport(models.Model):
    date = models.DateField()
    total_loans = models.DecimalField(max_digits=15, decimal_places=2)
    total_repayments = models.DecimalField(max_digits=15, decimal_places=2)
    outstanding_loans = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return f"Report for {self.date}"
