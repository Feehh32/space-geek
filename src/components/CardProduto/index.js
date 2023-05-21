import React from 'react';
import styles from './CardProduto.module.css';
import { Link, useLocation } from 'react-router-dom';

function CardProduto({ imagem, nomeProduto, preco, url, id }) {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/todos_os_produtos' ?
                (<>
                    <div className={styles.container}>
                        <div className={styles.containerImagem}>
                            <img src={imagem} alt={nomeProduto} />
                        </div>
                        <div className={styles.ContainerInfo}>
                            <h3>{nomeProduto}</h3>
                            <p>{`R$ ${preco}`}</p>
                            <p>{id}</p>
                        </div>
                    </div>
                </>) :
                (<div className={styles.container}>
                    <div className={styles.containerImagem}>
                        <img src={imagem} alt={nomeProduto} />
                    </div>
                    <div className={styles.ContainerInfo}>
                        <h3>{nomeProduto}</h3>
                        <p>{`R$ ${preco}`}</p>
                        <Link to={url} className={styles.produtoLink}>Ver produto</Link>
                    </div>
                </div>)
            }
        </>

    )
}

export default CardProduto;
