from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('leaderboard/', views.leaderboard, name='leaderboard'),
    path('leaderboard/<str:region>', views.get_leaderboard, name='get_leaderboard'),
]