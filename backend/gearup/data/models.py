# Create your models here.
from django.db import models
from django_mysql.models import ListCharField
from django.contrib.auth.models import User
from users.models import Profile
import json

class Board(models.Model):
    name = models.CharField(max_length=20,unique=True)
    tasks = models.IntegerField()
    cards = models.IntegerField()
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE) 

class Task(models.Model):
    board=models.ForeignKey(Board, on_delete=models.CASCADE)
    name=models.CharField(max_length=20)

class Card(models.Model):
    task=models.ForeignKey(Task, on_delete=models.CASCADE)
    title=models.CharField(max_length=20)
    description=models.CharField(max_length=200)
    duedate=models.CharField(max_length=30)

    activity = ListCharField(
        base_field=models.CharField(max_length=50),
        max_length=5000
    )