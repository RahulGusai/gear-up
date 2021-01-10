from django.urls import path,re_path

from . import views

urlpatterns = [
    path('boards', views.boards.as_view(), name='boards'),
    re_path('^lists/(?P<boardname>.+)$',views.lists.as_view(),name='lists'),
    re_path('^tasks/(?P<boardname>.+)/(?P<listname>.+)$',views.tasks.as_view(),name='tasks')
]
