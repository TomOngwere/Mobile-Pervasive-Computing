import pymongo

client = pymongo.MongoClient(
    "mongodb+srv://jainvinit14:Ug0WnvF7FuKYTruU@mpc.phvohi3.mongodb.net/"
)

# Database Name
db = client["mpc"]

# Collection Name
col = db["patient_data"]

x = col.find_one({"userid": 1})

print(x)
