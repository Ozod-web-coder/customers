from django.core.validators import MaxValueValidator
from django.db import models

# Create your models here.



class Customer(models.Model):

    CHOICES = [
        ('Active', 'Aктивный'),
        ('Inactive', 'Неактивный')
    ]

    name = models.CharField(max_length=200)
    INN = models.PositiveIntegerField(
        validators=[MaxValueValidator(999999999)]
    )
    status = models.CharField(choices=CHOICES, default='Active', max_length=120)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name