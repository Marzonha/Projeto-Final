import React, { useState } from "react";
import style from "./article.module.css";

const ImageSwitcher = () => {
  const [imageSrc, setImageSrc] = useState("./src/images/cuphead.jpg");
  const [imageSrc2, setImageSrc2] = useState("./src/images/slider2P.jpg");
  const [imageSrc3, setImageSrc3] = useState("./src/images/slider3P.avif");
  const [imageSrc4, setImageSrc4] = useState("./src/images/slider4P.webp");
  const [currentSlider, setCurrentSlider] = useState(1);

  const handleMouseOver = (src) => {
    setImageSrc(src);
  };

  const handleMouseOut = () => {
    setImageSrc("./src/images/cuphead.jpg");
  };

  const handleMouseOver2 = (src) => {
    setImageSrc2(src);
  };

  const handleMouseOut2 = () => {
    setImageSrc2("./src/images/slider2P.jpg");
  };

  const handleMouseOver3 = (src) => {
    setImageSrc3(src);
  };

  const handleMouseOut3 = () => {
    setImageSrc3("./src/images/slider3P.avif");
  };

  const handleMouseOver4 = (src) => {
    setImageSrc4(src);
  };

  const handleMouseOut4 = () => {
    setImageSrc4("./src/images/slider4P.webp");
  };

  const handlePrevSlider = () => {
    setCurrentSlider(currentSlider === 1 ? 4 : currentSlider - 1);
  };

  const handleNextSlider = () => {
    setCurrentSlider(currentSlider === 4 ? 1 : currentSlider + 1);
  };

  return (
    <>
      <article>
        <div className={style.slider}>
          {currentSlider === 1 && (
            <div className={style.containerImg}>
              <img className={style.imgP} src={imageSrc} alt="Imagem Card" />

              <div className={style.ImgS}>
                <div>
                  <img
                    className={style.imgS}
                    src="./src/images/cena1.jpg"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver("./src/images/cena1.jpg")
                    }
                    onMouseOut={handleMouseOut}
                  />
                  <img
                    className={style.imgS}
                    src="./src/images/cena22.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver("./src/images/cena22.webp")
                    }
                    onMouseOut={handleMouseOut}
                  />
                </div>
                <div>
                  <img
                    className={style.imgS}
                    src="./src/images/cena3.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver("./src/images/cena3.webp")
                    }
                    onMouseOut={handleMouseOut}
                  />
                  <img
                    className={style.imgS}
                    src="./src/images/cena4.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver("./src/images/cena4.webp")
                    }
                    onMouseOut={handleMouseOut}
                  />
                </div>
              </div>
            </div>
          )}

          {currentSlider === 2 && (
            <div className={style.containerImg}>
              <img className={style.imgP} src={imageSrc2} alt="Imagem Card" />

              <div className={style.ImgS}>
                <div>
                  <img
                    className={style.imgS}
                    src="./src/images/slider2_1.jpg"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver2("./src/images/slider2_1.jpg")
                    }
                    onMouseOut={handleMouseOut2}
                  />
                  <img
                    className={style.imgS}
                    src="./src/images/slider2_2.avif"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver2("./src/images/slider2_2.avif")
                    }
                    onMouseOut={handleMouseOut2}
                  />
                </div>
                <div>
                  <img
                    className={style.imgS}
                    src="./src/images/slider2_3.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver2("./src/images/slider2_3.webp")
                    }
                    onMouseOut={handleMouseOut2}
                  />
                  <img
                    className={style.imgS}
                    src="./src/images/slider2_4.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver2("./src/images/slider2_4.webp")
                    }
                    onMouseOut={handleMouseOut2}
                  />
                </div>
              </div>
            </div>
          )}

          {currentSlider === 3 && (
            <div className={style.containerImg}>
              <img className={style.imgP} src={imageSrc3} alt="Imagem Card" />

              <div className={style.ImgS}>
                <div>
                  <img
                    className={style.imgS}
                    src="./src/images/slider3_1.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver3("./src/images/slider3_1.webp")
                    }
                    onMouseOut={handleMouseOut3}
                  />
                  <img
                    className={style.imgS}
                    src="./src/images/slider3_2.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver3("./src/images/slider3_2.webp")
                    }
                    onMouseOut={handleMouseOut3}
                  />
                </div>
                <div>
                  <img
                    className={style.imgS}
                    src="./src/images/slider3_3.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver3("./src/images/slider3_3.webp")
                    }
                    onMouseOut={handleMouseOut3}
                  />
                  <img
                    className={style.imgS}
                    src="./src/images/slider3_4.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver3("./src/images/slider3_4.webp")
                    }
                    onMouseOut={handleMouseOut3}
                  />
                </div>
              </div>
            </div>
          )}

          {currentSlider === 4 && (
            <div className={style.containerImg}>
              <img className={style.imgP} src={imageSrc4} alt="Imagem Card" />

              <div className={style.ImgS}>
                <div>
                  <img
                    className={style.imgS}
                    src="./src/images/slider4_1.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver4("./src/images/slider4_1.webp")
                    }
                    onMouseOut={handleMouseOut4}
                  />
                  <img
                    className={style.imgS}
                    src="./src/images/slider4_2.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver4("./src/images/slider4_2.webp")
                    }
                    onMouseOut={handleMouseOut4}
                  />
                </div>
                <div>
                  <img
                    className={style.imgS}
                    src="./src/images/slider4_3.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver4("./src/images/slider4_3.webp")
                    }
                    onMouseOut={handleMouseOut4}
                  />
                  <img
                    className={style.imgS}
                    src="./src/images/slider4_4.webp"
                    alt="Imagem Card"
                    onMouseOver={() =>
                      handleMouseOver4("./src/images/slider4_4.webp")
                    }
                    onMouseOut={handleMouseOut4}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={style.btnCr}>
          <button className={style.btnac} onClick={handlePrevSlider}>
            Anterior
          </button>
          <button className={style.btnac} onClick={handleNextSlider}>
            Próximo
          </button>
        </div>
      </article>
    </>
  );
};

export default ImageSwitcher;