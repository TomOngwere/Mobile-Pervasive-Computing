const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const mongoDBLink =
  "mongodb+srv://jainvinit14:Ug0WnvF7FuKYTruU@mpc.phvohi3.mongodb.net/?retryWrites=true&w=majority&appName=mpc";
mongoose
  .connect(mongoDBLink)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const patientDataSchema = new mongoose.Schema({
  user_id: { type: Number },
  patient: {
    type: {
      name: { type: String },
      dob: { type: String },
      accountNumber: { type: Number },
    },
  },
  vitalSigns: {
    temperature: {
      type: Number,
      required: true,
    },
    heartRate: {
      type: Number,
      required: true,
    },
    bloodPressure: {
      systolic: {
        type: Number,
        required: true,
      },
      diastolic: {
        type: Number,
        required: true,
      },
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    bodyMassIndex: {
      type: Number,
      required: true,
    },
    respiratoryRate: {
      type: Number,
      required: true,
    },
    oxygenSaturation: {
      type: Number,
      required: true,
    },
    heightCm: {
      type: Number,
      required: true,
    },
    weightKg: {
      type: Number,
      required: true,
    },
  },
});

const patientModel = mongoose.model("patient_data", patientDataSchema);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/user/:id", (req, res) => {
  res.json("alsdjfoiafiasdlfi");
});

app.get("/user/hr/:id", (req, res) => {
  const id = req.params.id;
  const result = patientModel.find({});
  res.json({});
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
