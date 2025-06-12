import React, { useRef, useState } from "react";
import "./first_title.css";
import Main_title from "./main_title";
import Down_title from "./down_title";
import { motion } from "framer-motion"; 

import DiorShirt from "../img/디올 CD로고 반팔티.png";
import Luivitong from "../img/루이비통 모노그램.png";
import Buburi from "../img/버버리 체크니트 반팔티.png";
import Chrome from "../img/크롬하츠 세메터리 반팔티.png";
import Logo from "../img/girl.jpg";
import Luxa from "../img/luxa..png";
import Hunter_1 from "../img/hunter_1.png";
import Hunter_2 from "../img/hunter_2.png";
import Hunter_3 from "../img/hunter_3.png";
import Hunter_4 from "../img/hunter_4.png";
import Prada from "../img/프라다 1300000.webp";
import Sanglorang from "../img/생로랑 1100000원.jpg";
import Mejong from "../img/메종마르지엘라 800000.webp";
import Gucci_2 from "../img/구치 1350000원.jpg";

function First_title() {
  const productSectionRef = useRef(null);
  const [hovered, setHovered] = useState(false); 

  const scrollToProducts = () => {
    window.scrollTo({
      top: productSectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="position_2">
        <img src={Luxa} className="img-2" alt="luxasale" />
        
        <motion.button
          className="login"
          onClick={() => (window.location.href = "http://localhost:3000/login")}
          onMouseEnter={() => setHovered(true)} 
          animate={hovered ? { y: [0, -30, 0, -25, 0, -20, 0, -15, 0, -10, 0, -5, 0, -4, 0, -3, 0, -2, 0, -1, 0] } : { y: 0 }} // 호버 후 지속
          transition={{
            duration: 5,
            ease: "easeOut",
          }}
        >
          로그인
        </motion.button>

        <img src={Logo} className="img_1" alt="model" />
        <p className="p-1">최대 70%</p>
        <p className="p-2">할인</p>

        <motion.button
          className="p-3"
          onClick={scrollToProducts}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        >
          지금 구매하기
        </motion.button>
      </div>

      <Down_title />

      <motion.div
        className="position_3"
        ref={productSectionRef}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="fuck">5월 추천상품</h1>

        <div className="position_1">
          <Main_title imgSrc={DiorShirt} name={"Dior"} price={"650,000원"} sale={"9%"} />
          <Main_title imgSrc={Luivitong} name={"Louis Vuitton"} price={"75000원"} sale={"16%"} />
          <Main_title imgSrc={Buburi} name={"Burberry"} price={"550,000원"} sale={"23%"} />
          <Main_title imgSrc={Chrome} name={"Chrome Hearts"} price={"750,000원"} sale={"6%"} />
        </div>

        <div className="position_1">
          <Main_title imgSrc={Mejong} name={"Meojong"} price={"800,000원"} sale={"8%"} />
          <Main_title imgSrc={Gucci_2} name={"Gucci"} price={"1,350,000원"} sale={"14%"} />
          <Main_title imgSrc={Prada} name={"Prada"} price={"1,300,000원"} sale={"33%"} />
          <Main_title imgSrc={Sanglorang} name={"Sanglorang"} price={"1,100,000원"} sale={"19%"} />
        </div>
        <div className="position_1">
          <Main_title imgSrc={Hunter_1} name={"Hunter"} price={"119,000원"} sale={"5%"} />
          <Main_title imgSrc={Hunter_2} name={"Hunter"} price={"149,000원"} sale={"17%"} />
          <Main_title imgSrc={Hunter_3} name={"Hunter"} price={"210,000원"} sale={"20%"} />
          <Main_title imgSrc={Hunter_4} name={"Hunter"} price={"157,000원"} sale={"15%"} />
      </div>
      </motion.div>
    </div>
  );
}

export default First_title;