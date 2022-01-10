const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.status(200).send("server is on");
});
app.post("/", async (req, res) => {
  const URL = req.body.url;
  const APIKEY = process.env.API_KEY;
  const data = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${APIKEY}&url=${URL}&lang=en`
  ).then((res) => res.json());
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`server is running on port :${port}`);
});
