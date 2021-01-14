from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login,logout
from django.shortcuts import render,get_object_or_404
from django.template import loader
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from django.contrib.auth.models import User
from django.http import Http404
from django.urls import reverse
# from .serializers import AssetSerializer,MapSerializer,TrackerSerializer,AlertSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
# from tracking.models import Asset,Map,Tracker,Alert,MasterGateway,MasterHealth,AssetHealth
from users.models import Profile
from random import randint
import json
from rest_framework import status
import datetime
from dateutil import tz


# Create your views here.
class loginAPI(APIView):
    def post(self,request):
        username=request.data.get("username")
        password=request.data.get("password")
        
        user = authenticate(request, username=username, password=password)  

        if user is not None:
            login(request,user)
            return Response(status=status.HTTP_200_OK)
        else:
            return  Response(status=status.HTTP_401_UNAUTHORIZED)

class logoutAPI(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request):
        try:
            logout(request)
            return Response(status=status.HTTP_200_OK)
        except Exception as err:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class signup(APIView):
    def get(self,request):
        try:
            uname=request.GET.get("uname",'')
            name=request.GET.get("name",'')
            password=request.GET.get("password",'')
            phoneno=request.GET.get("phoneno",'')
            email=request.GET.get("email",'')

            u=User()
            u.name=name
            u.email=email
            u.set_password(password)
            u.username = uname
            u.save()
            
            p = Profile()
            p.user = u
            p.phone = phoneno
            p.save()
        
            return Response(status=status.HTTP_200_OK)
        except Exception as err:
            print(err)
            return Response(status=status.HTTP_400_BAD_REQUEST)

class checkUsername(APIView):
    def get(self,request,username):
        try:
            u = User.objects.get(username=username)
            return Response({"found":True},status=status.HTTP_200_OK)
        except Exception as err:
            return Response({"found":False},status=status.HTTP_200_OK)