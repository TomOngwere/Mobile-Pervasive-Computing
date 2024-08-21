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
    return db.patient_data.insert_one(data)


def mongoInsertMany(db, data):
    return db.patient_data.insert_many(data)


def mongoFind(db, term):
    return db.patient_data.find({}, term[0])


# client = mongoCall()
# mongoInsert(client["mpc"], [{"name": "vinit"}])
# cursor = mongoFind(client["mpc"], [{"name": "vinit"}])
# for i in cursor:
#     print(i)
