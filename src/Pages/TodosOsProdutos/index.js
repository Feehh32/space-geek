import React, { useContext } from 'react';
import styles from './TodosOsProdutos.module.css'
import Botao from 'components/Botao';
import CardProduto from 'components/CardProduto';
import { ProdutosContext } from 'contextos/Produtos';
import Excluir from 'components/Excluir';

function TodosOsProdutos() {
    const { produtos } = useContext(ProdutosContext);

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
                    <div key={produto.id} className={styles.containerCard}>
                        <Excluir productId={produto.id}/>
                        <CardProduto
                            imagem={produto.imagem}
                            nomeProduto={produto.nome}
                            preco={produto.preco}
                            id={`#${produto.id}`}
                        />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default TodosOsProdutos;