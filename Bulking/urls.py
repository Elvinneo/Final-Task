from django.contrib import admin
from django.urls import path
from core.views  import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name="home"),
    path('about/' , about_view,name="about"),
    path('membership/' ,membership_view,name="membership"),
    path('membership_detail/' , membership_detail_view,name="membership_detail"),
    path('blog/' , blog_view,name="blog"),
    path('blog_detail/' , blogdetail_view,name="blogdetail"),
    path('overlays/' , overlays_view,name="overlays"),
]
