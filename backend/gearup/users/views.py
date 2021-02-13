from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated,AllowAny
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
from gearup import settings
from django.contrib.auth.signals import user_logged_in
import requests

# Create your views here.

class loginAPI(APIView):
    def post(self,request):
        permission_classes = [AllowAny,]
        
        try:
            emailid=request.data.get("emailid")
            password=request.data.get("password")
            print(emailid)
            print(password)

            try:
                user = User.objects.get(email=emailid)
                authObject = authenticate(username=user.username,password=password)
                
                if authObject is not None:
                    res = requests.post("http://127.0.0.1:8000/api/token/",json={'username':user.username,'password':password})
                    data = res.json()
                    
                    user_details = {}
                    user_details['name'] = "%s %s" % (  
                        user.first_name, user.last_name)
                    user_details['token'] = data["access"]
                    user_details["refresh"] = data["refresh"]
                    user_logged_in.send(sender=user.__class__,
                                    request=request, user=user)
                
                    print(user_details)
                    return Response(user_details, status=status.HTTP_200_OK)
                else:
                    raise Exception

            except Exception as e:
                print("Error occured")
                print(e)
                res = {
                    'error': 'can not authenticate with the given credentials or the account has been deactivated'}
                return Response(res, status=status.HTTP_403_FORBIDDEN)
        
        except KeyError:
            res = {'error': 'please provide a email and a password'}
            return Response(res)
            
class logoutAPI(APIView):
    permission_classes = [IsAuthenticated,]

    def get(self,request):
        try:
            print("Successfullt authenticated")
            return Response(status=status.HTTP_200_OK)
        except Exception as err:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class signup(APIView):
    def post(self,request):
        permission_classes = [AllowAny,]
        
        try:
            uname=request.data.get("uname")
            name=request.data.get("name")
            password=request.data.get("password")
            phoneno=request.data.get("phoneno")
            email=request.data.get("email")

            print(password  )
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
        
class userDetails(APIView):
    permission_classes = [IsAuthenticated,]
    
    def get(self,request):
        try:
            payload = {"name":request.user.name,"username":request.user.username}
            return Response(payload,status=status.HTTP_200_OK)
        except Exception as err:
            print(err)
            return Response(status=status.HTTP_400_BAD_REQUEST)