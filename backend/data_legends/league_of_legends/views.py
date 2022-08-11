from django.shortcuts import render
from django.http import HttpResponse
import os
from dotenv import load_dotenv
from rest_framework.response import Response
from rest_framework.decorators import api_view
from riotwatcher import LolWatcher, ApiError

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, '../.env')
load_dotenv(filename)

API_KEY = os.getenv('RIOT_API')

lol_watcher = LolWatcher(API_KEY)

# my_region = 'na1'

# me = lol_watcher.summoner.by_name(my_region, 'SunnyGG')

# my_ranked_stats = lol_watcher.league.by_summoner(my_region, me['id'])
# print(my_ranked_stats)

# Create your views here.
def index(request):
    return HttpResponse("Hello, world! You're at the league of legends index")

@api_view(['GET'])
def leaderboard(request, region):
    lb = lol_watcher.league.challenger_by_queue(region, "RANKED_SOLO_5x5")
    return Response(lb)

@api_view(['GET'])
def summoner(request, region, summoner_name):
    summoner_id = lol_watcher.summoner.by_name(region, summoner_name)['id']
    summoner_info = lol_watcher.league.by_summoner(region, summoner_id)
    return Response(summoner_info)