const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, "..", "dist")));

// All other requests return the React app, so React Router can handle routing
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

const PORT = process.env.PORT || 12345;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});