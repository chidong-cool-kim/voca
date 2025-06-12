import React, { useState } from 'react';
import './Louis_shirt.css';
import LouisLogo from '../main_component_img/..png'
import Main_component from '../main_component/main_component.js';
import { useNavigate } from 'react-router-dom';

function Component({imgSrc,name}) {
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
          {/*<Main_component imgSrc={} name={""} price=""/>
          <Main_component imgSrc={} name={""} price=""/>
          <Main_component imgSrc={} name={""} price=""/>
          <Main_component imgSrc={} name={""} price=""/>*/}
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