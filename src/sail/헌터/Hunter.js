import React, { useState } from 'react';
import './Hunter.css';
import hunter_1 from '../../img/hunter_1.png';
import hunter_2 from '../../img/hunter_2.png';
import hunter_3 from '../../img/hunter_3.png';
import hunter_4 from '../../img/hunter_4.png';
import HunterLogo from '../main_component_img/hunterlogo.png'
import Main_component from '../main_component/main_component.js';
import { useNavigate } from 'react-router-dom';

function Component({imgSrc,name}) {
  const navigate = useNavigate();

  const GoLink_1 = () => {
    navigate('/Hunter/bag'); 
  }

  const GoLink_2 = () => {
    navigate('/Hunter/shirt'); 
  }

  const GoLink_3 = () => {
    navigate('/Hunter/shoes'); 
  }

  return (
    <div>
      <div className="body_1">
        <div className="position_100">
          <img src={HunterLogo} className="LouisLogo"/>
          <p>쿨한 신발 브랜드 헌터의 제품을 만나보세요</p>
        </div>
        <div className="position_101">
          <button className="button_1" onClick={GoLink_1}>가방</button>
          <button className="button_1" onClick={GoLink_2}>의류</button>
          <button className="button_1" onClick={GoLink_3}>신발</button>
        </div>
        <hr className="hr"></hr>
        <div className="position_102">
          <Main_component imgSrc={hunter_1} name={"헌터"} price="11900000" className="img"/>
          <Main_component imgSrc={hunter_2} name={"헌터"} price="14900000" className="img"/>
          <Main_component imgSrc={hunter_3} name={"헌터"} price="210300" className="img"/>
          <Main_component imgSrc={hunter_4} name={"헌터"} price="16650000" className="img"/>
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