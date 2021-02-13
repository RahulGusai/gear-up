
from rest_framework import serializers
from .models import Board,Task,Card

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ['name','tasks','cards']


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id','name']

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id','title','description','duedate','activity']