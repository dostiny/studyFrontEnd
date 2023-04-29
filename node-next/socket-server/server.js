import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function () {
  console.log("listening and 8080");
});

app.get("/beauty", (req, res) => {
  res.send("뷰티용품 쇼핑할 수 있는 페이지입니다.");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/write", (req, res) => {
  res.sendFile(__dirname + "/write.html");
});

// 어떤 사람이 /add 경로로 POST 요청하면 => 를 해주세요

app.post("/add", (req, res) => {
  res.send("전송완료");
  console.log(req.body);
});
