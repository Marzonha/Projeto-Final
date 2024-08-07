import style from '../Article/article.module.css'

export default function Article() {
    return (
        <>
            {/* Article */}

            <section className={style}>
                <article>
                    <h2>Título do Artigo</h2>
                    <p>Texto do artigo</p>
                    <small>Data de Publicação: 01/01/2022</small>
                </article>
            </section>

        </>
    )
}
