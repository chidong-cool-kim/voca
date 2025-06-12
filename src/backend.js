const express = require("express");
const dbConnect = require("./dbConnect")
const path = require("path"); 
const cookieParser = require("cookie-parser");
const main = express();
const router_main = "./router_1"

main.use(express.json());

dbConnect()

main.use(express.static(path.join(__dirname, "build")))

main.listen(3000, () => {
  console.log('서버실행');
});