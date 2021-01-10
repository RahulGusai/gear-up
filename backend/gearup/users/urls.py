from django.urls import path,re_path

from . import views

app_name = 'users'
urlpatterns = [
    path('login', views.loginAPI.as_view(), name='login'),
    path('logout', views.logoutAPI.as_view(), name='logout'),
    path('signup', views.signup.as_view(), name='signup'),
]
   
