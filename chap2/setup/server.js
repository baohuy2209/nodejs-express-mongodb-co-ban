const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.listen(3000, () => {
  console.log("App listening on port http://localhost:3000");
});
app.get("/", (req, res) => {
  res.send("The home page");
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact.html"));
});
app.get("*", function (req, res) {
  res.header(404);
  res.send("page not found");
});
