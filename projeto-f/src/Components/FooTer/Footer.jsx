import style from './footer.module.css'


export default function Footer() {
    return (
        <>

            <footer className={style.footer}>
                <section>
                    <div className={style.container}>

                        <div className={style.contato}>
                            <h3 className={style.title}>Contato</h3>
                            <p>Email:  <a href="mailto:email@example.com">email@example.com</a></p>
                            <p>Telefone: (11) 99999-9999</p>
                            <p>Endereço: Rua Exemplo, 123</p>
                        </div>
                        <div>
                            <a href=""><h3>Sobre Nós</h3></a>
                            <a href=""><h3>Suporte</h3></a>
                            <a href=""><h3>Comunidade</h3></a>
                            <a href=""><h3>Git Hub</h3></a>
                        </div>
                        <div>
                            <a href=""><h3>Redes Sociais</h3></a>
                            <a href=""><h3>Parceiros</h3></a>
                            <a href=""><h3>Patrons</h3></a>
                        </div>

                    </div>
                </section>
            </footer>

        </>
    )
}
