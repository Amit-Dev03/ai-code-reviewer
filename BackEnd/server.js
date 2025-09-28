const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); //body-parser => for app.get routes
app.use(cors());
require("dotenv").config();

const aiRoutes = require("./src/routes/ai_routes");

app.get("/", (req, res) => {
  res.send(`<h1>Code Reviewer App</h1>`);
});

app.use("/ai", aiRoutes);

// Use the PORT from environment variables for deployment, with a fallback to 3000
const port = process.env.PORT || 3000;

// Listen on 0.0.0.0 to accept connections from outside the container
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port : ${port}`);
});
