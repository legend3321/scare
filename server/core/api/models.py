from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class MedicalData(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    uploadImage = models.ImageField(upload_to='images/')
    rrsult = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username
