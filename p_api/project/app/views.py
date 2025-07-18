from django.shortcuts import render
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination

from app.models import Customer
from app.serializers import CusSer


# Create your views here.

class CustomerPagi(PageNumberPagination):
    page_size = 20

class CustomerView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CusSer
    pagination_class = CustomerPagi


class OrderByName(generics.ListAPIView):
    queryset = Customer.objects.all().order_by('name')
    serializer_class = CusSer
    pagination_class = CustomerPagi


class OrderByDate(generics.ListAPIView):
    queryset = Customer.objects.all().order_by('created_at')
    serializer_class = CusSer
    pagination_class = CustomerPagi


class OnlyActive(generics.ListAPIView):
    queryset = Customer.objects.filter(status='Active')
    serializer_class = CusSer
    pagination_class = CustomerPagi


class OnlyInactive(generics.ListAPIView):
    queryset = Customer.objects.all().filter(status='Inactive')
    serializer_class = CusSer
    pagination_class = CustomerPagi