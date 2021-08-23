from django.db import models

# Create your models here.


class User(models.Model):
    # id = models.CharField(max_length=8, default="", unique=True)
    email = models.CharField(max_length=100, unique=True)
    first_name = models.CharField(max_length=50, default="")
    last_name = models.CharField(max_length=50, default="")
    school = models.CharField(max_length=50, default="")
    phone = models.CharField(max_length=50, default="")
    city_of_origin = models.CharField(max_length=50, default="")
    current_city = models.CharField(max_length=50, default="")

    joined_at = models.DateTimeField(auto_now_add=True)


class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    photo = models.ImageField(max_length=1000)
    button = models.CharField(max_length=100)
