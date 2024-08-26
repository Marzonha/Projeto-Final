import Header from "../Header/Header";
import Article from "./Article/Article";

import style from "../Main/main.module.css";


export default function Main() {
  return (
    <>
      <Header />
      <main>
        <h2>Jogos em Promoções</h2>

        <section>
          <Article />
        </section>

        <section>
          <div className={style.container2}>
            <h1 className={style.titles}>Dia de jogs gratis</h1>
          </div>
          <div>
            <div className={style.banner}>
              <div className={style.slider} style={{ "--quantity": 10 }}>
                <div className={style.model}></div>
                <div className={style.item} style={{ "--position": 1 }}>
                  <img src="./src/images/jogo1.avif" alt="" />
                </div>
                <div className={style.item} style={{ "--position": 2 }}>
                  <img src="./src/images/jogo2.jpg" alt="" />
                </div>
                <div className={style.item} style={{ "--position": 3 }}>
                  <img src="./src/images/jogo3.jpg" alt="" />
                </div>
                <div className={style.item} style={{ "--position": 4 }}>
                  <img src="./src/images/jogo4.jpg" alt="" />
                </div>
                <div className={style.item} style={{ "--position": 5 }}>
                  <img src="./src/images/jogo5.png" alt="" />
                </div>
                <div className={style.item} style={{ "--position": 6 }}>
                  <img src="./src/images/jogo6.jpg" alt="" />
                </div>
                <div className={style.item} style={{ "--position": 7 }}>
                  <img src="./src/images/jogo7.webp" alt="" />
                </div>
                <div className={style.item} style={{ "--position": 8 }}>
                  <img src="./src/images/jogo8.jpg" alt="" />
                </div>
                <div className={style.item} style={{ "--position": 9 }}>
                  <img src="./src/images/jogo9.jpg" alt="" />
                </div>
                <div className={style.item} style={{ "--position": 10 }}>
                  <img src="./src/images/jogo10.jpg" alt="" />
                </div>
                <Canvas>
                  <ambientLight />
                  <Suspense></Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
