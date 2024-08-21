// src/components/Slider.jsx

import React from 'react';

const Slider = () => {
  const games = [
    '../images/jogo1.avif',
    '../images/jogo2.jpg',
    '../images/jogo3.jpg',
    '../images/jogo4.jpg',
    '../images/jogo5.png',
    '../images/jogo6.jpg',
    '../images/jogo7.webp',
    '../images/jogo8.jpg',
    '../images/jogo9.jpg',
    '../images/jogo10.jpg',


    // ... adicione os caminhos para as outras imagens de jogos aqui
  ];

  return (
    <section className="ImgM">
      <div className="banner">
        <div className="slider" style={{ '--quantity': games.length }}>
          {games.map((jogo, index) => (
            <div className="item" key={index} style={{ '--position': index + 1 }}>
              <img src={jogo} alt={`Jogo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;