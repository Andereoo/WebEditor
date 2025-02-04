from django.urls import path

from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('<slug:slug>/editor/save', views.save, name='save'),
    path('editor/save', views.savemain, name='savemain'),
    path('editor/page', views.editpage, name='editpage'),
    path('editor/fetchimages', views.fetchimages, name='fetchimages'),
    path('editor/saveimage', views.saveimage, name='saveimage'),
    path('editor/deleteimage', views.deleteimage, name='deleteimage'),
    path('editor/editimage', views.editimage, name='editimage'),
    path('editor/setfavicon', views.setfavicon, name='setfavicon'),
    path('<slug:slug>', views.page, name='single'),
]
