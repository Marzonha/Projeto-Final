import Header from '../Header/Header'
import Article from './Article/Article'


import style from '../Main/main.module.css'


export default function Main() {
    return (
        <>
            <Header />
            <main className={style.containerSecun}>

                {/* Aba de jogos em promoções*/}

                <h2 className={style.txtSecun}>Jogos em Promoções</h2>

                <section>
                    <Article />
                </section>

                <section className={style.Products}>
                    <div className={style.container}>
                        <h1 className={style.TitleHeading}>Recomendados</h1>
                        <div className={style.Slider}>
                            <button className={style.prevbtn}><img className={style.switchImg} src="./src/images/arrow-left.png" alt="" /></button>
                            <button className={style.nextbtn}><img className={style.switchImg} src="./src/images/arrow-left.png" alt="" /></button>
                            <div className={style.gamesSlider}>
                                <div className={style.gamescard}>
                                    <div className={style.productimage}>
                                        <img className={style.imgGame} src="./src/images/jogo1.avif" alt="" />
                                    </div>
                                    <div>
                                        <h2 className={style.txtC}> CoD Black Ops 2</h2>
                                        <div className={style.containerStars} >
                                            <img className={style.stars} src="./src/images/estrela.png" alt="" />
                                            <img className={style.stars} src="./src/images/estrela.png" alt="" />
                                            <img className={style.stars} src="./src/images/estrela.png" alt="" />
                                            <img className={style.stars} src="./src/images/estrela.png" alt="" />
                                            <img className={style.stars} src="./src/images/estrela.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


            </main>

        </>
    )
}



{/* 
                <section className={style.sectionM}>
                    <div className={style.containerS}>
                        <div className={style.slider}>
                            <div className={style.item}>
                                <img className={style.imgS} src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                            <div className={style.item}>
                                <img className={style.imgS} src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                            <div className={style.item}>
                                <img className={style.imgS} src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                            <div className={style.item}>
                                <img className={style.imgS} src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                            <div className={style.item}>
                                <img className={style.imgS} src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                            <div className={style.item}>
                                <img className={style.imgS} src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                            <div className={style.item}>
                                <img className={style.imgS} src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                            <div className={style.item}>
                                <img className={style.imgS} src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>

                        </div>

                    </div>

                </section> */}