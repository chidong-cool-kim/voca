import React, { useState } from 'react';
import './main_title.css';

function Main_title({ imgSrc, name, price, sale }) {
  const [isHovered, setIsHovered] = useState(false); 

  const handleMouseEnter = () => {
    setIsHovered(true); 
  };

  const handleMouseLeave = () => {
    setIsHovered(false); 
  };

  return (
    <div>
      <div
        className="border-box"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        {isHovered ? (
          <div className = "div">
            <p className="brown"><img src={imgSrc} className="img-3"/><span className="color_1">{name}</span><span className="color_2">&#8361;{price}</span><span className="color_3"><br/>&#8361;{sale}할인</span></p>
          </div>
        ) : (
          <>
            <img src={imgSrc} alt={name} />
            <p className="skyblue">{name}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Main_title;