import React, { useState } from "react";

import style from './article.module.css'

const ImageSwitcher = () => {
  const [imageSrc, setImageSrc] = useState("./src/images/cuphead.jpg ");

// criar vários desses para as 4 imagens secundárias
  const handleMouseOver = () => {
    setImageSrc("./src/images/cena1.jpg");
  };

  const handleMouseOver2 = () => {
    setImageSrc("./src/images/cena22.webp");
    
  };
  
  const handleMouseOver3 = () => {
    setImageSrc("./src/images/cena3.webp");
  };
  
  const handleMouseOver4 = () => {
    setImageSrc("./src/images/cena4.webp");
  };
  
// criar vários desses para as 4 imagens secundárias


  const handleMouseOut = () => {
    setImageSrc("./src/images/cuphead.jpg");
  };

  return (
    <>
    {/* Img comitado usado de referência */}

      {/* <img
      src={imageSrc}
      alt="Imagem"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ width: '300px', height: '300px' }}
    /> */}

    {/* Img comitado usado de referência */}

      <article>
        <div className={style.slider}>
          <div className={style.containerImg}>
            {/* imagem principal */}
            <img className={style.imgP} 
            src={imageSrc} 
            
            alt="Imagem Card" />
            
            {/* imagem principal */}

            <div className={style.ImgS}>

              {/* imagens secundárias */}

              <img className={style.imgS} 
              src="./src/images/cena1.jpg" 
              alt="Imagem Card" 
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              


              />

              <img className={style.imgS} 
              src="./src/images/cena22.webp" 
              alt="Imagem Card" 
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut}
             
              />

              <img
                className={style.imgS}
                src="./src/images/cena3.webp"
                alt="Imagem Card"
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut}

              />

              <img
                className={style.imgS}
                src="./src/images/cena4.webp"
                alt="Imagem Card"
                onMouseOver={handleMouseOver4}
                onMouseOut={handleMouseOut}
              />
              {/* imagens secundárias */}
            </div>
          </div>
        </div>

        <div className={style.btnCr}>
          <button className={style.btnac}>
            <a href="#"></a>
          </button>
          <button className={style.btnac}>
            <a href="#"></a>
          </button>
          <button className={style.btnac}>
            <a href="#"></a>
          </button>
          <button className={style.btnac}>
            <a href="#"></a>
          </button>
        </div>
      </article>
    </>
  );
};

export default ImageSwitcher;
