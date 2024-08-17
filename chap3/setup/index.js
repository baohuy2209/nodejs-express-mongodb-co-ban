const express = require("express");
const app = new express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const PORT = process.env.PORT || 4000;
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});
