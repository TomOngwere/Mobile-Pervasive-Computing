from django.http import HttpResponse
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


def helloworld(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def userHandler(request):
    client = mongoCall()
    return HttpResponse("Hello, world. You're at the polls index.")


def mongoFind(db):
    return db["mpc"]["patient_data"].find({"userid": 1})


def mongoCall():
    uri = "mongodb+srv://jainvinit14:Ug0WnvF7FuKYTruU@mpc.phvohi3.mongodb.net/?retryWrites=true&w=majority&appName=mpc"
    client = MongoClient(uri, server_api=ServerApi("1"))
    try:
        client.admin.command("ping")
        print("Pinged your deployment. You successfully connected to MongoDB!")
        return client
    except Exception as e:
        print(e)
