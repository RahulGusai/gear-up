from django.urls import path,re_path

from . import views

urlpatterns = [
    path('boards', views.boards.as_view(), name='boards'),
    re_path('^lists/(?P<boardname>.+)$',views.lists.as_view(),name='lists'),
    re_path('^tasks/(?P<boardname>.+)/(?P<listname>.+)$',views.tasks.as_view(),name='tasks'),

    #Board related APIs
    re_path('^board/add/(?P<boardname>.+)$',views.addBoard.as_view(),name='addBoard'),
    re_path('^board/delete/(?P<boardname>.+)$',views.deleteBoard.as_view(),name='deleteBoard'),
    re_path('^board/rename/(?P<boardname>.+)$',views.renameBoard.as_view(),name='renameBoard'),

    #List related APIs
    re_path('^list/add/(?P<boardname>.+)/(?P<listname>.+)$',views.addList.as_view(),name='addList'),
    re_path('^list/delete/(?P<boardname>.+)/(?P<listname>.+)$',views.deleteList.as_view(),name='deleteList'),
    re_path('^list/rename/(?P<boardname>.+)/(?P<listname>.+)$',views.renameList.as_view(),name='deleteList'),

    #Task related APIs
    re_path('^task/add/(?P<boardname>.+)/(?P<listname>.+)$',views.addTask.as_view(),name='addTask'),
    re_path('^task/edit/(?P<boardname>.+)/(?P<listname>.+)/(?P<id>.+)$',views.editTask.as_view(),name='editTask'),
    re_path('^task/delete/(?P<boardname>.+)/(?P<listname>.+)/(?P<id>.+)$',views.deleteTask.as_view(),name='deleteTask'),

]

