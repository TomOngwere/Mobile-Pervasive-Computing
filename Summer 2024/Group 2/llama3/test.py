import mongoCall


client = mongoCall.mongoCall()
for i in mongoCall.mongoFind(client):
    print(i)
