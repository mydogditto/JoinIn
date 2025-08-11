const express = require("express");
const cors = require("cors");
const { sequelize, Signup } = require("./models");
//const User = require("./models/Users");
const app = express();
const PORT = 8080;
const path = require('path');

//  Middleware
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, '..', 'dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
// });


// //  Create a new signup 
// app.post("/api/signup", async (req, res) => {
//   try {
//     const { title, date, maxSlots } = req.body;

//     // Basic validation (ensure date is today or future)
//     const today = new Date().toISOString().split("T")[0];
//     if (date < today) {
//       return res.status(400).json({ error: "Date must be today or in the future" });
//     }

//     const signup = await Signup.create({ title, date, maxSlots });
//     res.json(signup);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server Error");
//   }
// });

//  Sync database and start server
sequelize.sync()
  .then(() => {
    console.log(" Database synced");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error(" Database connection error:", err);
  });