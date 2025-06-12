import React from "react";
import "./Louis_bag.css";
import LouisLogo from "../main_component_img/..png";
import Main_component from "../main_component/main_component.js";
import { useNavigate, useLocation } from "react-router-dom";  

import luiback_1 from "../main_component_img/루이비통 가방 12500000원.avif";
import luiback_2 from "../main_component_img/루이비통 가방 반둘리에 13300000원.avif";
import luiback_3 from "../main_component_img/루이비통 반둘리에 14900000원.avif";
import luiback_4 from "../main_component_img/루이비통 반둘리에 16650000.avif";

function LouisBagComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="body">
      <div className="position_100">
        <img src={LouisLogo} className="LouisLogo" alt="Louis Vuitton" />
        <p>럭셔리 패션 브랜드 루이비통의 제품을 만나보세요</p>
      </div>

      {/* 네비게이션 버튼 */}
      <div className="position_101">
        <button className="button_1" onClick={() => navigate("/Louis/bag")}>가방</button>
        <button className="button_1" onClick={() => navigate("/Louis/shirt")}>의류</button>
        <button className="button_1" onClick={() => navigate("/Louis/shoes")}>신발</button>
      </div>

      <hr className="hr" />

      {/* 상품 목록 */}
      <div className="position_102">
        <Main_component imgSrc={luiback_1} name={"루이비통 반둘리에 25"} price="12500000" />
        <Main_component imgSrc={luiback_2} name={"루이비통 반둘리에 30"} price="13300000" />
        <Main_component imgSrc={luiback_3} name={"루이비통 반둘리에 40"} price="14900000" />
        <Main_component imgSrc={luiback_4} name={"루이비통 반둘리에 50"} price="16650000" />
      </div>
    </div>
  );
}

export default LouisBagComponent;