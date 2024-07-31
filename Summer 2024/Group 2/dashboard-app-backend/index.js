// server.js
const express = require("express");
const mysql = require("mysql2");
// const cors = require("cors");
const app = express();
const port = 3000;
// app.use(cors());
// Create a connection to the database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mpc",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database");
});

// Define a simple route to test the connection
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Define the endpoint to get user data based on ID
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const query = "SELECT * FROM patient_data WHERE id = ?";

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Database query failed" });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(results[0]);
  });
});

// Define the endpoint to get hr data based on ID
app.get("/user/hr/:id", (req, res) => {
  // const userId = req.params.id;
  // const query = "SELECT * FROM HeartRate WHERE id = ?";

  const heartRateData = [
    {
      id: 1,
      date: "2024-07-20",
      time: "08:00:00",
      heart_rate_bpm: 72,
    },
    {
      id: 1,
      date: "2024-07-20",
      time: "12:00:00",
      heart_rate_bpm: 75,
    },
    {
      id: 1,
      date: "2024-07-20",
      time: "16:00:00",
      heart_rate_bpm: 78,
    },
    {
      id: 1,
      date: "2024-07-21",
      time: "08:00:00",
      heart_rate_bpm: 70,
    },
    {
      id: 1,
      date: "2024-07-21",
      time: "12:00:00",
      heart_rate_bpm: 74,
    },
    {
      id: 1,
      date: "2024-07-21",
      time: "16:00:00",
      heart_rate_bpm: 77,
    },
    {
      id: 1,
      date: "2024-07-22",
      time: "08:00:00",
      heart_rate_bpm: 71,
    },
    {
      id: 1,
      date: "2024-07-22",
      time: "12:00:00",
      heart_rate_bpm: 73,
    },
    {
      id: 1,
      date: "2024-07-22",
      time: "16:00:00",
      heart_rate_bpm: 76,
    },
    {
      id: 1,
      date: "2024-07-23",
      time: "08:00:00",
      heart_rate_bpm: 69,
    },
    {
      id: 1,
      date: "2024-07-23",
      time: "12:00:00",
      heart_rate_bpm: 72,
    },
    {
      id: 1,
      date: "2024-07-23",
      time: "16:00:00",
      heart_rate_bpm: 75,
    },
    {
      id: 1,
      date: "2024-07-24",
      time: "08:00:00",
      heart_rate_bpm: 68,
    },
    {
      id: 1,
      date: "2024-07-24",
      time: "12:00:00",
      heart_rate_bpm: 71,
    },
    {
      id: 1,
      date: "2024-07-24",
      time: "16:00:00",
      heart_rate_bpm: 74,
    },
  ];

  // db.query(query, [userId], (err, results) => {
  //   if (err) {
  //     console.error("Error executing query:", err);
  //     res.status(500).json({ error: "Database query failed" });
  //     return;
  //   }

  //   if (results.length === 0) {
  //     res.status(404).json({ message: "User not found" });
  //     return;
  //   }

  //   res.json(results);
  // });
  res.json(heartRateData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
