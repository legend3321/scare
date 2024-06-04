from rest_framework.decorators import api_view # type: ignore
from rest_framework.response import Response # type: ignore
from django.contrib.auth import authenticate # type: ignore
from rest_framework.authtoken.models import Token # type: ignore

from .serializer import SignupSerializer, LoginSerializer


# Create your views here.

@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data) 
    serializer.is_valid(raise_exception=True)
    user = authenticate(username=serializer.validated_data['username'], password=serializer.validated_data['password'])
    if user is not None:
        token = Token.objects.get_or_create(user=user)[0].key
        return Response({'token': token, 'user': serializer.data})
    else:
        return Response({'message': 'Login failed'}, status=401)
    
@api_view(['POST'])
def register(request):
    serializer = SignupSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response({'message': 'User created successfully'})

