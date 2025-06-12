import React, { useState } from 'react';
import './main_component.css';

function Main_component({ imgSrc, name, price, sale }) {
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
          <div className = "div_5">
            <p className="brown"><img src={imgSrc} className="img-5"/><span className="name_1">{name}</span><span className="name_2">&#8361;{price}</span></p>
          </div>
        ) : (
          <>
           <div className="position">
            <img src={imgSrc} alt={name} className="img-5"/>
            <p className="notskyblue">{name}</p>
           </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Main_component;