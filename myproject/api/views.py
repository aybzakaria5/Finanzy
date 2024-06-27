from rest_framework import Response
from rest_framework.decorators import api_view

@api_view('GET')
def getDatata(request):
    promise = { 'name':"Ayoub", 'age': "25", "job": "developer", "city": "AgAdir", "country": "Morocco"}
    # dataMessage = "gettting the data from the databse"     
    return Response(promise)
@api_view('POST')
def postData(request):
    data = request.data
    print(data)