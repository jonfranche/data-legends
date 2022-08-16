from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('leaderboard/<str:region>', views.leaderboard, name='leaderboard'),
    path('summoner/<str:region>/<str:summoner_name>', views.summoner, name='summoner')
]