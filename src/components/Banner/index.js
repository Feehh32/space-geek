import Botao from 'components/Botao';
import React from 'react';
import styles from './Banner.module.css';
import bannerImagem from './banner-imagem.png';

function Banner() {

    return (
        <div className={styles.banner}>
            <img src={bannerImagem} alt="ta aqui " className={styles.bannerImagem} />
            <div className={styles.bannerInfo}>
                <h2>Dezembro Promocional</h2>
                <p>Produtos selecionados com 33% de desconto</p>
                <Botao text='Ver Consoles' className="colorfull" />
            </div>
        </div>
    )
}

export default Banner;