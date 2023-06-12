import React from 'react';
import styles from './CardProduto.module.css';
import { Link } from 'react-router-dom';

function CardProduto({ imagem, nomeProduto, preco, url, id }) {
    return (
        <div className={styles.container}>
            <div className={styles.containerImagem}>
                <img src={imagem} alt={nomeProduto} />
            </div>
            <div className={styles.ContainerInfo}>
                <h3>{nomeProduto}</h3>
                <p>{`R$ ${parseFloat(preco).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                {url ?
                    (<Link to={url} className={styles.produtoLink}>Ver produto</Link>)
                    :
                    (<p>{id}</p>)
                }
            </div>
        </div>
    )
}

export default CardProduto;
