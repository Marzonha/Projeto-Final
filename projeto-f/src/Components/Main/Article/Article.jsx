import style from "../Article/article.module.css";

export default function Article() {
  return (
    <>
      {/* Article */}
      <article className={style.Article}>
        <section className={style.container}>
          <div className={style.CardImgP}>imagem 1 P</div>
          <div className={style.CardImgS1}>imagem 1 S</div>
          <div className={style.CardImgS2}>imagem 1 S</div>
          <div className={style.CardImgS3}>imagem 1 S</div>
          <div className={style.CardImgS4}>imagem 1 S</div>
          <div className={style.MCcard}></div>
        </section>
      </article>
    </>
  );
}
