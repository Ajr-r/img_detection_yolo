from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
import os
from app.ml import reckon

# Create your views here.
@csrf_exempt  
def home(req):

    apikey='dknk339fbbb'
    key=req.headers.get('x-api-key')
   
    
    if key==apikey:
        file=req.body
        
        s=reckon(file)
        return HttpResponse(s)
    else:
        return HttpResponse(status=500)

@csrf_exempt     
def csrf(req):
    
    apikey='dknk339fbbb'
    key=req.headers.get('x-api-key')
    if key==apikey:
        cs=get_token(req)
        return JsonResponse({'csrfToken':cs})
    else:
        return JsonResponse({'error': 'Invalid API key'},status=500)

def test(req):
  
    return JsonResponse({'test': 'ok'},status=200)