from django.contrib.auth.models import AbstractUser
from django.db import models

from phonenumber_field.modelfields import PhoneNumberField

class User(AbstractUser):
    phone_number = PhoneNumberField(blank=True, null=True)
    avatar = models.ImageField(upload_to='images', blank=True, null=True)

    def __str__(self):
        return self.username
