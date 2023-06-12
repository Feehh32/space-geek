import React, { useContext, useEffect, useState } from 'react'
import styles from './ProdutosBuscados.module.css';
import { ProdutosContext } from 'contextos/Produtos';
import CardProduto from 'components/CardProduto';


function ProdutosBuscados() {
	const { resultados } = useContext(ProdutosContext);
	const [storedResultados, setStoredResultados] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('resultadosPesquisa') !== null) {
			setStoredResultados(JSON.parse(localStorage.getItem('resultadosPesquisa')));
		}

	}, []);

	useEffect(() => {
		if(resultados.length > 0){
			localStorage.setItem('resultadosPesquisa', JSON.stringify(resultados));
			setStoredResultados(resultados);
		}

	}, [resultados]); 

	const encontrado = storedResultados.some((resultado)=> resultado.msg === 'Não foi encontrado nenhum resultado referente a sua busca. Tente novamente com outros termos')

	return (
		<>
			{!encontrado ? (
				<section className={styles.containerCheio}>
					{storedResultados.map((resultado) => (
						<CardProduto
							imagem={resultado.imagem}
							nomeProduto={resultado.nome}
							key={resultado.id}
							preco={resultado.preco.toFixed(2).replace(/\./g, ',')}
							url={`/${resultado.id}`}
						/>
					))}
				</section>
			) : (
				<section className={styles.containerVazio}>
					{storedResultados.map((resultado)=> <p>{resultado.msg}</p>)}
				</section>
			)}
		</>
	)
}

export default ProdutosBuscados;