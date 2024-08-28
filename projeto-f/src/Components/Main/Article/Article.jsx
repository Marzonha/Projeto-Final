import style from "../Article/article.module.css";




export default function Article() {
  return (
    <>
      {/* Article */}
      <article className={style.Article}>
        <section className={style.container}>
          <div className={style.CardImgP}><img className={style.imgPT} src="./src/images/cuphead.jpg" alt="" /></div>
          <div className={style.CardImgS1}><img className={style.imgST} src="./src/images/cena1.jpg" alt="" /></div>
          <div className={style.CardImgS2}><img className={style.imgST} src="./src/images/cena2.jpg" alt="" /></div>
          <div className={style.CardImgS3}><img className={style.imgST} src="./src/images/cena3.webp" alt="" /></div>
          <div className={style.CardImgS4}><img className={style.imgST} src="./src/images/cena4.webp" alt="" /></div>
        </section>
      </article>
    </>
  );
}
