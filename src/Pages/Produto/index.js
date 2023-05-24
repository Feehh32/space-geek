import React, { useContext } from 'react';
import styles from './Produto.module.css';
import produtos from 'json/db.json'
import { useParams } from 'react-router-dom';
import CardProduto from 'components/CardProduto';
import { ProdutosContext } from 'contextos/Produtos';

function Produto() {
    const {produtos} = useContext(ProdutosContext);
    const screenSize = window.innerWidth;
    const parametros = useParams();
    const produto = produtos.find((produto) => {
        return produto.id === Number(parametros.id);
    })

    let produtosSimilares = produtos
        .filter((produto) => produto.id !== Number(parametros.id))
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
                    <p className={styles.precoProduto}>{`R$ ${produto.preco.toFixed(2)}`}</p>
                    <p className={styles.descricaos}>
                        Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam
                    </p>
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