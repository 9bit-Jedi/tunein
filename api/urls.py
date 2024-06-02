from django.urls import path
from .views import RoomView, CreateRoomView, CreateRoomView2

urlpatterns = [
    path('home/', RoomView.as_view()),
    path('', RoomView.as_view()),
    
    
    path('create/', CreateRoomView.as_view()),
    path('create2/', CreateRoomView2.as_view()),
]
