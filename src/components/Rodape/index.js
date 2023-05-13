import Logo from 'components/Logo';
import styles from './Rodape.module.css';

import React from 'react'
import ListaRodapeItem from 'components/ListaRodapeItem';
import FaleConosRodape from 'components/FaleConoscoRodape';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <section className={styles.contacts}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <nav >
                    <ul className={styles.containerLista}>
                        <ListaRodapeItem key="Quem somos nós" texto="Quem somos nós" url="/" />
                        <ListaRodapeItem key="Política de privacidade" texto="Política de privacidade" url="/" />
                        <ListaRodapeItem key="Programa fidelidade" texto="Programa fidelidade" url="/" />
                        <ListaRodapeItem key="Nossas lojas" texto="Nossas lojas" url="/" />
                        <ListaRodapeItem key="Quero ser franqueado" texto="Quero ser franqueado" url="/" />
                        <ListaRodapeItem key="Anuncie aqui" texto="Anuncie aqui" url="/" />
                    </ul>
                </nav>
                <div className={styles.form}>
                    <FaleConosRodape className={styles.form} />
                </div>
            </section>
            <div className={styles.containerCredits}>
                <p>Desenvolvido por Fernando Pereira - 2023</p>
                <p>Baseado no projeto Alura Chanllenge 3</p>
            </div>
        </footer>
    )
}

export default Rodape;