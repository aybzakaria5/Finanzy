from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15)
    address = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    tax_pin = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.user.username
