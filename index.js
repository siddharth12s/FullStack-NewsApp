const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/routers");
const dbConnect = require("./config/dbConnect");
const path = require("path");
dotenv.config();

app.use(express.json());
app.use(cors());
dbConnect();

const PORT = process.env.PORT || 5000;

app.use("/api", router);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/api`);
});
