from .views import UserView, CreateUserView
from django.urls import path

urlpatterns = [
    path('user', UserView.as_view()),
    path('create-user', CreateUserView.as_view()),
    

]
