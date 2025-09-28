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

app.listen(3000, () => {
  console.log(`Server is running on port : 3000`);
});
