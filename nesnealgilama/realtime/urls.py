from . import views
from django.urls import path
 

urlpatterns = [
    path('run', views.run, name='run'),
]