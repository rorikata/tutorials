from django.conf.urls import url
from app1 import views

urlpatterns = [
    url(r'^ipaddress/$', views.ipaddress, name='ipaddress'),
    url(r'^ipaddress/change/(?P<ipaddress_id>\d+)/$', views.ipaddress_change, name='ipaddress_change'),
]
