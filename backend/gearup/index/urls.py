from django.urls import path,re_path

from . import views

app_name = 'index'
urlpatterns = [
    re_path(r'^', views.index, name='index')
]
   

