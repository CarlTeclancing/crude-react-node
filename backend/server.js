const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// ✅ Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "crude",
});

app.get("/students", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error", details: err });
    }
    return res.json(data);
  });
});

app.post('/create', (req, res) => {
  const sql = "INSERT INTO student (`name`, `email`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: "Insert error", details: err });
    }
    return res.json(data);
  });
});


app.post('/update', (req, res) => {
    const sql = "UPDATE student SET name = ?, email = ? WHERE id = ?";
    const values = [
      req.body.name,
      req.body.email,
      req.body.id
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error("Update error:", err);
        return res.status(500).json({ error: "Update error", details: err });
      }
      return res.json(data);
    });
  });


  app.post('/delete', (req, res) => {
    const sql = "DELETE FROM student WHERE id = ?";
    const values = [req.body.id];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error("Delete error:", err);
        return res.status(500).json({ error: "Delete error", details: err });
      }
      return res.json({ message: "Student deleted successfully", data });
    });
  });
  
  

app.listen(8081, () => {
  console.log("Server listening on port 8081");
});
