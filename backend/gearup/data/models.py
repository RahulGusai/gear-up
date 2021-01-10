# Create your models here.
from django.db import models
from django_mysql.models import ListCharField
from django.contrib.auth.models import User
from users.models import Profile
import json

class Board(models.Model):
    name = models.CharField(max_length=20,unique=True)
    lists = models.IntegerField()
    cards = models.IntegerField()
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE) 

class List(models.Model):
    board=models.ForeignKey(Board, on_delete=models.CASCADE)
    name=models.CharField(max_length=20)

class Task(models.Model):
    List=models.ForeignKey(List, on_delete=models.CASCADE)
    title=models.CharField(max_length=20)
    description=models.CharField(max_length=200)
    duedate=models.CharField(max_length=30)

    activity = ListCharField(
        base_field=models.CharField(max_length=50),
        max_length=5000
    )
