from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login,logout
from django.shortcuts import render,get_object_or_404
from django.template import loader
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from django.contrib.auth.models import User
from django.http import Http404
from django.urls import reverse
from .serializers import BoardSerializer,TaskSerializer,CardSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from data.models import Board,Task,Card
from users.models import Profile
from random import randint  
import json
from rest_framework import status
import datetime
from dateutil import tz


class data(APIView):
    permission_classes = [IsAuthenticated,]
    
    def get(self,request):
        print(request.user)
        profile=Profile.objects.get(user=request.user)
        boards = Board.objects.filter(profile=profile)
        
        payload=[]
        for b in boards:
            board = {}
            board["name"]= b.name
            board["tasksCount"]= b.tasks
            board["cardsCount"]= b.cards 
            board["tasks"] = []
            
            tasks = Task.objects.filter(board=b)
            for t in tasks:
                task={}
                task["name"]=t.name
                cards = Card.objects.filter(task=task)
                cardsSerializer = CardSerializer(cards,many=True)
                tasks["cards"]=cardsSerializer.data 
                
                board['tasks'].append(task)
        
            payload.append(board)
            
        print(payload)    
        return Response(payload,status=status.HTTP_200_OK)
        # else:
        #     print(boardsSerializer.errors)
        #     return Response(boardsSerializer.errors,status=status.HTTP_400_BAD_REQUEST)

# class boards(APIView):
#     def get(self,request):
#         permission_classes = [IsAuthenticated,]

#         profile=request.user.profile
#         boards = Board.objects.filter(profile=profile)
#         boardsSerializer = BoardSerializer(boards,many=True)
#         if boardsSerializer.is_valid():
#             return Response(boardsSerializer.data,status=status.HTTP_200_OK)
#         else:
#             return Response(boardsSerializer.errors,status=status.HTTP_400_BAD_REQUEST)


# class tasks(APIView):
#     def get(self,request,boardname):
#         permission_classes = [IsAuthenticated,]

#         profile=request.user.profile
#         board=Board.objects.get(name=boardname,profile=profile)
#         tasks=Task.objects.filter(board=board)
#         tasksSerializer = TaskSerializer(tasks,many=True)
#         if tasksSerializer.is_vallid():
#             return Response(tasksSerializer.data,status=status.HTTP_200_OK)
#         else:
#             return Response(tasksSerializer.errors,status=status.HTTP_400_BAD_REQUEST)

# class cards(APIView):
#     def get(self,request,boardname,taskname):
#         permission_classes = [IsAuthenticated,]

#         profile=request.user.profile
#         board=Board.objects.get(name=boardname,profile=profile)
#         task=Task.objects.get(name=taskname,board=board)
#         cards = Card.objects.filter(list=task)
#         cardsSerializer = CardSerializer(cards,many=True)
#         if cardsSerializer.is_valid():
#             return Response(cardsSerializer.data,status=status.HTTP_200_OK)
#         else:
#             return Response(cardsSerializer.errors,status=status.HTTP_400_BAD_REQUEST)


# #Board related APIs
# class addBoard(APIView):
#     def post(self,request,boardname):
#         permission_classes = [IsAuthenticated,]
        
#         try:
#             profile=request.user.profile
#             board = Board.objects.create(name=boardname,tasks=0,cards=0,profile=profile)
#             return Response({"name":boardname},status=status.HTTP_200_OK)
#         except Exception as err:
#             return Response(status=status.HTTP_400_BAD_REQUEST)

# class deleteBoard(APIView):
#     def post(self,request,boardname):
#         permission_classes = [IsAuthenticated,]
        
#         try:
#             profile=request.user.profile
#             board = Board.objects.get(name=boardname,profile=profile)
#             board.delete()
#             return Response({"name":boardname},status=status.HTTP_200_OK)
#         except Exception as err:
#             return Response(status=status.HTTP_400_BAD_REQUEST)

# class renameBoard(APIView):
#     def post(self,request,boardname):
#         permission_classes = [IsAuthenticated]
        
#         try:
#             profile=request.user.profile
#             board = Board.objects.get(name=boardname,profile=profile)
#             board.name=request.data.get('name')
#             board.save()
#             return Response({"name":boardname},status=status.HTTP_200_OK)
#         except Exception as err:
#             return Response(status=status.HTTP_400_BAD_REQUEST)


# #Task Related APIs
# class addTask(APIView):
#     def post(self,request,boardname,taskname):
#         permission_classes = [IsAuthenticated]
                
#         try:
#             profile=request.user.profile
#             board=Board.objects.get(name=boardname,profile=profile)
#             Task.objects.create(name=taskname,board=board)
#             return Response({"name":taskname},status=status.HTTP_200_OK)
#         except Exception as err:
#             return Response(status=status.HTTP_400_BAD_REQUEST)

# class deleteTask(APIView):
#     def post(self,request,boardname,taskname):
#         permission_classes = [IsAuthenticated,]
                
#         try:
#             profile=request.user.profile
#             board=Board.objects.get(name=boardname,profile=profile)
#             Task.objects.get(name=taskname,board=board).delete()
#             return Response({"name":taskname},status=status.HTTP_200_OK)
#         except Exception as err:
#             return Response(status=status.HTTP_400_BAD_REQUEST)

# class renameTask(APIView):
#     def post(self,request,boardname,taskname):
#         permission_classes = [IsAuthenticated,]
                
#         try:
#             profile=request.user.profile
#             board=Board.objects.get(name=boardname,profile=profile)
#             List=Task.objects.get(name=taskname,board=board)
#             Task.name = taskname
#             Task.save()
#             return Response({"name":boardname},status=status.HTTP_200_OK)
#         except Exception as err:
#             return Response(status=status.HTTP_400_BAD_REQUEST),


# #Card Related APIs
# class addCard(APIView):
#     def post(self,request,boardname,cardname):
#         permission_classes = [IsAuthenticated,]
       
#         try:
#             profile=request.user.profile
#             board=Board.objects.get(name=boardname,profile=profile)
#             List=Task.objects.get(name=cardname,board=board)
            
#             taskPayload = request.data.get("data")
#             # Add task addition related code
#             # 
#             # 
            
#             return Response({"id":Task.objects.all()[Task.objects.count()-1].id},status=status.HTTP_200_OK)
#         except Exception as err:
#             return Response(status=status.HTTP_400_BAD_REQUEST)


# class editCard(APIView):
#     def post(self,request,boardname,taskname,cid):
#         permission_classes = [IsAuthenticated,]
        
#         try:
#             profile=request.user.profile
#             board=Board.objects.get(name=boardname,profile=profile)
#             task=Task.objects.get(name=taskname,board=board)
#             card=Card.objects.get(id=cid,task=task)

#             #Add editing logic here
#             #
#             #
            
#             return Response({"id":cid},status=status.HTTP_200_OK)
#         except Exception as err:
#             return Response(status=status.HTTP_400_BAD_REQUEST)


# class deleteCard(APIView):
#     def post(self,request,boardname,taskname,cid):
#         permission_classes = [IsAuthenticated,]
        
#         try:
#             profile=request.user.profile
#             board=Board.objects.get(name=boardname,profile=profile)
#             task=Task.objects.get(name=taskname,board=board)
#             card=Card.objects.get(id=tid,task=task)
#             card.delete()
#             return Response({"id":cid},status=status.HTTP_200_OK)
#         except Exception as err:
#             return Response(status=status.HTTP_400_BAD_REQUEST),


