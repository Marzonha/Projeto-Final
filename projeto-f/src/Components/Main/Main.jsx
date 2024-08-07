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

                <Article/>

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