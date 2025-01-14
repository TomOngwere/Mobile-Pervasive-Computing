import json
from django.http import HttpResponse
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


def helloworld(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def userHandler(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def userSearch(request,id):
    return HttpResponse(mongoFind(id))


def mongoFind(id):
    return json.dumps(list(db["mpc"]["patient_data"].find({"userid": 1},{"_id": 0})))


def mongoCall():
    uri = "mongodb+srv://jainvinit14:Ug0WnvF7FuKYTruU@mpc.phvohi3.mongodb.net/?retryWrites=true&w=majority&appName=mpc"
    client = MongoClient(uri, server_api=ServerApi("1"))
    try:
        client.admin.command("ping")
        print("Pinged your deployment. You successfully connected to MongoDB!")
        return client
    except Exception as e:
        print(e)

db = mongoCall()