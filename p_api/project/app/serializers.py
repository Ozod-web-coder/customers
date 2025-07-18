from rest_framework import serializers

from app.models import Customer


class CusSer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['name', 'INN', 'status', 'created_at']