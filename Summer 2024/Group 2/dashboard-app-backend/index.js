const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

const port = 3000;
const uri =
  "mongodb+srv://jainvinit14:Ug0WnvF7FuKYTruU@mpc.phvohi3.mongodb.net/";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
const patientCollection = client.db("mpc").collection("patient_data");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await patientCollection.find({ userid: id });
  const resultArray = await result.toArray();
  res.send(JSON.stringify(resultArray));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
