const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const KEEP_API_KEY = "YOUR_KEEPA_API_KEY";

app.use(bodyParser.json());

app.post("/api/keepa", async (req, res) => {
  const { ean } = req.body;
  try {
    const response = await axios.get(
      `https://api.keepa.com/product?key=${KEEP_API_KEY}&domain=1&code=${ean}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
