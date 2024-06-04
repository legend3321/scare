from rest_framework.decorators import api_view # type: ignore
from rest_framework.response import Response # type: ignore
from django.contrib.auth import authenticate, # type: ignore
from django.contrib.auth.models import User # type: ignore

# Create your views here.

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        return Response({'message': 'Login successful'})
    else:
        return Response({'message': 'Login failed'}, status=401)
    
@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    first_name = request.data.get('first_name')
    last_name = request.data.get('last_name')
    email = request.data.get('email')
    if User.objects.filter(username=username).exists():
        return Response({'message': 'Username already exists'}, status=400)
    User.objects.create_user(username=username, password=password, first_name=first_name, last_name=last_name, email=email)
    return Response({'message': 'User created successfully'})

