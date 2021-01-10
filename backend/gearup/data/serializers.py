
from rest_framework import serializers
from .models import Board,List,Task

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ['name','lists','cards']


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ['id','name']

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id','title','description','duedate','activity']