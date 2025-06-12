const express = require("express");
const http = require("http");
const path = require("path");
const dbConnect = require("./dbConnect");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

// 라우터 임포트
const {router_main, router_goods, router_login, router_sign} = require('./router_1');

// Express 앱 설정
const app = express();

// 데이터베이스 연결
dbConnect();

// Express 서버 미들웨어 설정
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public', 'sign.html')));
app.use(express.static(path.join(__dirname, 'sign', 'login.html')));
app.use(express.static(path.join(__dirname, 'index.html')));

// 라우터 설정
app.use("/MainHome_Page", router_main);
app.use("/Goods_Page", router_goods);

// 서버
server.listen(3000, () => {
    console.log("서버가 http://localhost:3000 에서 실행 중");
});