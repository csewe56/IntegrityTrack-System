from django.urls import path
from .views import ReportIncidentView, IncidentListView, UserProfileView

urlpatterns = [
    path('incident/report/', ReportIncidentView.as_view(), name='report-incident'),
    path('incident/view/', IncidentListView.as_view(), name='incident-list'),
    path('user/profile/', UserProfileView.as_view(), name='user-profile'),
]

