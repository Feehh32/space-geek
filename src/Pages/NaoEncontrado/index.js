import React from 'react'
import styles from './NaoEncontrado.module.css';



function NaoEncontrado() {
    return (
        <section className={styles.backround}>
            <div className={styles.container}>
                <h2 className={styles.codeError}>404</h2>
                <h3>Página não encontrada! :( </h3>
                <p>A página que você procura ou está em manutenção ou não existe.</p>
            </div>
        </ section>
    )
}

export default NaoEncontrado;