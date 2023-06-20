const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.get("/pet", (req, res) => {
  res.send("펫용품 쇼핑할 수  있는 페이지입니다.");
});

app.get("/beauty", (req, res) => {
  res.send("뷰티용품을 쇼핑할 수 있는 페이지입니다.");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
