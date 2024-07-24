from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


def mongoCall():
    uri = "mongodb+srv://jainvinit14:Ug0WnvF7FuKYTruU@mpc.phvohi3.mongodb.net/?retryWrites=true&w=majority&appName=mpc"
    client = MongoClient(uri, server_api=ServerApi("1"))
    try:
        client.admin.command("ping")
        print("Pinged your deployment. You successfully connected to MongoDB!")
        return client
    except Exception as e:
        print(e)


def mongoInsert(db, data):
    return db.patient_data.insert_many(data)


client = mongoCall()
mongoInsert(client["mpc"], [{"name": "vinit"}])
