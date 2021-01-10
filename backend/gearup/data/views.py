from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login,logout
from django.shortcuts import render,get_object_or_404
from django.template import loader
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from django.contrib.auth.models import User
from django.http import Http404
from django.urls import reverse
from .serializers import BoardSerializer,ListSerializer,TaskSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from data.models import Board,List,Task
from users.models import Profile
from random import randint
import json
from rest_framework import status
import datetime
from dateutil import tz


class boards(APIView):
    def get(self,request):
        authentication_classes = [SessionAuthentication]
        permission_classes = [IsAuthenticated]

        profile=request.user.profile
        boards = Board.objects.filter(profile=profile)
        boardsSerializer = BoardSerializer(boards,many=True)
        if boardsSerializer.is_valid():
            return Response(boardsSerializer.data,status=status.HTTP_200_OK)
        else:
            return Response(boardsSerializer.errors,status=status.HTTP_400_BAD_REQUEST)


class lists(APIView):
    def get(self,request,boardname):
        authentication_classes = [SessionAuthentication]
        permission_classes = [IsAuthenticated]

        board=Board.objects.get(name=boardname)
        lists=List.objects.filter(board=board)
        listsSerializer = ListSerializer(lists,many=True)
        if listsSerializer.is_vallid():
            return Response(listsSerializer.data,status=status.HTTP_200_OK)
        else:
            return Response(listsSerializer.errors,status=status.HTTP_400_BAD_REQUEST)

class tasks(APIView):
    def get(self,request,boardname,listname):
        authentication_classes = [SessionAuthentication]
        permission_classes = [IsAuthenticated]

        board=Board.objects.get(name=boardname)
        listObject=List.objects.get(name=listname,board=board)
        tasks = Task.objects.filter(list=listObject)
        tasksSerializer = TaskSerializer(tasks,many=True)
        if tasksSerializer.is_vallid():
            return Response(tasksSerializer.data,status=status.HTTP_200_OK)
        else:
            return Response(tasksSerializer.errors,status=status.HTTP_400_BAD_REQUEST)
    