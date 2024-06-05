fromm django.contrib.auth.models import User
from rest_framework import serializers
from .models import Incident

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class IncidentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Incident
        fields = ['id', 'user', 'details', 'status', 'timestamp']

