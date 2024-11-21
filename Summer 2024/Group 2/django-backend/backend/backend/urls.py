from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('hello/',views.helloworld),
    path("admin/", admin.site.urls),
    path("users/",views.allUsers),
    path("user/<int:user_id>",views.userHandler)
]
