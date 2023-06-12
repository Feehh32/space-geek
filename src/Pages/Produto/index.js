import React, { useContext } from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import CardProduto from 'components/CardProduto';
import { ProdutosContext } from 'contextos/Produtos';
import NaoEncontrado from 'Pages/NaoEncontrado';

function Produto() {
    const {produtos} = useContext(ProdutosContext);
    const screenSize = window.innerWidth;
    const parametros = useParams();
    const produto = produtos.find((produto) => {
        return produto.id === Number(parametros.id) || produto.id === String(parametros.id);
    })

    if(!produto) {
        return <NaoEncontrado />
    }

    let produtosSimilares = produtos
        .filter((produto) => produto.id !== Number(parametros.id)) || produto.id !== String(parametros.id)
        .sort((a, b) => b.id - a.id);

    screenSize < 1080 ? produtosSimilares = produtosSimilares.slice(0, 4) : produtosSimilares = produtosSimilares.slice(0, 6);

    return (
        <main className={styles.container}>
            <section className={styles.produto}>
                <div className={styles.containerImagem}>
                    <img src={produto.imagem} alt={produto.nome} className={styles.imagemProduto} />
                </div>
                <div className={styles.produtoInfo}>
                    <h2>{produto.nome}</h2>
                    <p>{`R$ ${produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                    <p className={styles.descricaos}>{produto.descricao}</p>
                </div>
            </section>
            <section className={styles.containerSimilares}>
                <h3 className={styles.similaresTitulo}>Produtos similares</h3>
                <div className={styles.similares}>
                    {produtosSimilares.map((produto) => (
                        <CardProduto
                            imagem={produto.imagem}
                            key={produto.id}
                            nomeProduto={produto.nome}
                            preco={produto.preco}
                            url={`/${produto.id}`}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Produto