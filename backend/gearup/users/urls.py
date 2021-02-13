from django.urls import path,re_path
from django.views.decorators.csrf import csrf_exempt

from . import views

app_name = 'users'
urlpatterns = [
    path('login', views.loginAPI.as_view(), name='login'),
    path('logout', views.logoutAPI.as_view(), name='logout'),
    path('signup', views.signup.as_view(), name='signup'),
    path('info', views.userDetails.as_view(), name='userDetails'),
    re_path('^check/(?P<username>.+)$', views.checkUsername.as_view(), name='checkUsername'),
]

   
