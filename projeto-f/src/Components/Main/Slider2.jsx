import React from 'react';
import './slider2.module.css'; // Importe o arquivo CSS para estilização

const Slider = () => {
  return (
    <div className="slider" style={{ '--width': '100px', '--height': '50px', '--quantity': 10 }}>
      <div className="list">
        <div className="item" style={{ '--position': 1 }}>
          <img src="images/dragon_1.jpg" alt="" />
        </div>
        <div className="item" style={{ '--position': 2 }}>
          <img src="images/dragon_2.jpg" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Slider;
