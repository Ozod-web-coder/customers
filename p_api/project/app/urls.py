

from django.urls import path

from app.views import CustomerView, OrderByName, OrderByDate, OnlyActive, OnlyInactive

urlpatterns = [
    path('customers/', CustomerView.as_view(), name='cuslist'),
    path('customers/by_name/', OrderByName.as_view(), name='name'),
    path('customers/by_date/', OrderByDate.as_view(), name='date'),
    path('customers/only_active/', OnlyActive.as_view(), name='active'),
    path('customers/only_inactive/', OnlyInactive.as_view(), name='inactive')
]