import React, { useState } from 'react';
import './Louis_shirt.css';
import LouisLogo from '../main_component_img/..png'
import Main_component from '../main_component/main_component.js';
import { useNavigate } from 'react-router-dom';
import louis_bag_1 from '../main_component_img/루이비통 모노그램 버질아블로.png';
import louis_bag_2 from '../main_component_img/루이비통 스커트 미니 플레어드 실크.png';
import louis_bag_3 from '../main_component_img/모노그램 리버서블 윈드브레이커 블루.png';
import louis_bag_4 from '../main_component_img/후디드 랩 코트.png';

function Component({imgSrc,name,sale}) {
  const navigate = useNavigate();

  const GoLink_1 = () => {
    navigate('/Louis/bag'); 
  }

  const GoLink_2 = () => {
    navigate('/Louis/shirt'); 
  }

  const GoLink_3 = () => {
    navigate('/Louis/shoes'); 
  }

  return (
    <div>
      <div className="body">
        <div className="position_100">
          <img src={LouisLogo} className="LouisLogo"/>
          <p>럭셔리 패션 브랜드 루이비통의 제품을 만나보세요</p>
        </div>
        <div className="position_101">
          <button className="button_1" onClick={GoLink_1}>가방</button>
          <button className="button_1" onClick={GoLink_2}>의류</button>
          <button className="button_1" onClick={GoLink_3}>신발</button>
        </div>
        <hr className="hr"></hr>
        <div className="position_102">
          <Main_component imgSrc={louis_bag_1} name={"모노그램 버질아블루"} price="2,936,010"/>
          <Main_component imgSrc={louis_bag_2} name={"스커트 미니 플레어드 실크"} price="2,968,150"/>
          <Main_component imgSrc={louis_bag_3} name={"리버서블 윈드 블루"} price="5,105,120"/>
          <Main_component imgSrc={louis_bag_4} name={"후디드 랩 코트"} price="10,136,120"/>
        </div>
        <div className="position_102">
          <Main_component />  
          <Main_component />
          <Main_component />
          <Main_component />
        </div>
        <div className="position_102">
          <Main_component />
          <Main_component />
          <Main_component />
          <Main_component />
        </div>
      </div>
    </div>
  )     
}

export default Component;