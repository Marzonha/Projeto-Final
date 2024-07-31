import style from '../Main/main.module.css'

export default function Main() {
    return (
        <>
            <header className={style.containerM}>
                <h1 className={style.txtPrima}> Principais Destaques</h1>
                {/* <p className={style.txtSecun}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestiae ut? Quidem voluptatum sapiente, modi aut voluptatibus dicta est eligendi ut dignissimos labore, eius id! Alias, quibusdam nemo. Optio, repellat.</p> */}
            </header>

            <main className={style.containerSecun}>
                {/* Aba de jogos em promoções*/}

                <header><h2>Jogos em Promoções</h2></header>

                <section className={style.sectionM}>

                    <div className={style.containerImg}>
                        <div className={style.slider}>
                            <div className={style.list}>

                                <div className="item"><img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                                <div className="item"><img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                                <div className="item"><img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                                <div className="item"><img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                                <div className="item"><img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                                <div className="item"><img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                                <div className="item"><img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                                <div className="item"><img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="" /></div>
                            </div>

                        </div>

                    </div>

                </section>

            </main>

        </>
    )
}
{/* <img className={style.imgM} src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/10/df810159-3b33-417d-8158-cf1a185a0109-t4yhsaq1d168.png" alt="jogos em promo" /> */ }