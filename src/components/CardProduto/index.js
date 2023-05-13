import React from 'react';
import styles from './CardProduto.module.css';
import { Link } from 'react-router-dom';

function CardProduto({ imagem, nomeProduto, preco, id, url }) {
    return (
        <div className={styles.container}>
            <div className={styles.containerImagem}>
                <img src={imagem} alt={nomeProduto} />
            </div>
            <div className={styles.ContainerInfo}>
                <p>{nomeProduto}</p>
                <p>{`R$ ${preco}`}</p>
                <Link to={url} className={styles.produtoLink}>Ver produto</Link>
            </div>
        </div>
    )
}

export default CardProduto;
