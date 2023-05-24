import React, { useContext } from 'react';
import styles from './TodosOsProdutos.module.css'
import Botao from 'components/Botao';
import CardProduto from 'components/CardProduto';
import { ProdutosContext } from 'contextos/Produtos';

function TodosOsProdutos() {
    const {produtos} = useContext(ProdutosContext);
    return (
        <main className={styles.container}>
            <div className={styles.containerCabecalho}>
                <h2>Todos os produtos</h2>
                <div className={styles.containerBotao}>
                    <Botao text='Adicionar produto' className='colorfull' url='/adicionar_produto' />
                </div>
            </div>
            <div className={styles.containerProdutos}>
                {produtos.map((produto) => (
                    <CardProduto
                        imagem={produto.imagem}
                        key={produto.id}
                        nomeProduto={produto.nome}
                        preco={produto.preco.toFixed(2)}
                        id={`#${produto.id}`}
                    />
                ))}
            </div>
        </main>
    )
}

export default TodosOsProdutos;