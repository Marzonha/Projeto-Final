import style from "../Article/article.module.css";



export default function Article() {
  return (
    <>

      <article>

        <div className={style.containerImg} >
          <img className={style.imgP} src="./src/images/cuphead.jpg" alt="" />
          <div className={style.ImgS}>
            <img className={style.imgS} src="./src/images/cena1.jpg" alt="" />

            <img className={style.imgS} src="./src/images/cena2.jpg" alt="" />

            <img className={style.imgS} src="./src/images/cena3.webp" alt="" />

            <img className={style.imgS} src="./src/images/cena4.webp" alt="" />

          </div>
        </div>

        <div className={style.btnCr}>
          <button className={style.btnac}><a href="#"></a></button>
          <button className={style.btnac}><a href="#"></a></button>
          <button className={style.btnac}><a href="#"></a></button>
          <button className={style.btnac}><a href="#"></a></button>
        </div>
        
      </article>

    </>
  );
}
