from django.shortcuts import render
from django.http import HttpResponse
import os
from dotenv import load_dotenv
from rest_framework.response import Response
from rest_framework.decorators import api_view
from riotwatcher import TftWatcher, ApiError

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, '../.env')
load_dotenv(filename)

API_KEY = os.getenv('TFT_API')

tft_watcher = TftWatcher(API_KEY)

def index(request):
    return HttpResponse("Hello, world! You're at the league of legends index")

@api_view(['GET'])
def leaderboard(request, region):
    lb = tft_watcher.league.challenger(region)
    return Response(lb)

@api_view(['GET'])
def summoner(request, region, summoner_name):
    summoner_id = tft_watcher.summoner.by_name(region, summoner_name)['id']
    summoner_info = tft_watcher.league.by_summoner(region, summoner_id)
    return Response(summoner_info)