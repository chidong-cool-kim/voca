import React, { useState } from 'react';
import './down_title.css';
import Hunter from '../img/헌터로고.png';
import Gucci from '../img/구찌로고.png';
import Luivitong from '../img/루이비통로고.png';
import Melong from '../img/mm6로고.png';
import Buburi from '../img/버버리로고.png';
import Chrome from '../img/크롬로고.png';
import Celin from '../img/셀린느로고.png';
import { useNavigate } from 'react-router-dom';



function Down_title({}) {

  const navigate = useNavigate();

  const GoLink_1 = () => {
    navigate('/Hunter/bag'); 
  }

  const GoLink_2 = () => {
    navigate('/Gucci/bag'); 
  }

  const GoLink_3 = () => {
    navigate('/Louis/bag'); 
  }

  const GoLink_4 = () => {
    navigate('/MM6/bag'); 
  }

  const GoLink_5 = () => {
    navigate('/Buburry/bag'); 
  }

  const GoLink_6 = () => {
    navigate('/Chrome/bag'); 
  }

  const GoLink_7 = () => {
    navigate('/Selin/bag'); 
  }

  return (
    <div>
        <div className="position_5">
            <span><img src={Hunter} onClick={GoLink_1} className="img_5"/></span>
            <span><img src={Gucci} onClick={GoLink_2} className="img_6"/></span>
            <span><img src={Luivitong} onClick={GoLink_3} className="img_7"/></span>
            <span><img src={Melong} onClick={GoLink_4} className="img_8"/></span>
            <span><img src={Buburi} onClick={GoLink_5}className="img_9"/></span>
            <span><img src={Chrome} onClick={GoLink_6}className="img_10"/></span>
            <span><img src={Celin} onClick={GoLink_7} className="img_11"/></span>
        </div>  
    </div>
  )
}

export default Down_title;