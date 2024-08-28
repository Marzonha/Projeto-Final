// src/components/Slider.jsx

import React from "react";

const Slider = () => {
  const games = [
    "./src/images/jogo1.avif",
    "./src/images/jogo2.jpg",
    "./src/images/jogo3.jpg",
    "./src/images/jogo4.jpg",
    "./src/images/jogo5.png",
    "./src/images/jogo6.jpg",
    "./src/images/jogo7.webp",
    "./src/images/jogo8.jpg",
    "./src/images/jogo9.jpg",
    "./src/images/jogo10.jpg",

    // ... adicione os caminhos para as outras imagens de jogos aqui
  ];

  return (
    <section className="ImgM">
      <div className="banner">
          <div className="slider" style={{ "--quantity": games.length }}>
            {games.map((jogo, index) => (
              <div
                className="item"
                key={index}
                style={{ "--position": index + 1 }}
              >
                <img src={jogo} alt={`Jogo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Slider;
