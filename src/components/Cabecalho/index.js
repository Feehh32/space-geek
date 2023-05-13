import BarraPesquisa from 'components/BarraPesquisa'
import Logo from 'components/Logo'
import React from 'react'
import styles from './Cabecalho.module.css'
import Botao from 'components/Botao'

function Cabecalho() {
	const mdScreen = window.innerWidth < 1024;

	return (
		<header className={styles.cabecalho}>

			<Logo />
			{mdScreen ? (
				<>
					<Botao text="Login" className="transparent" />
					<BarraPesquisa placeholder="O que deseja encontrar?" />
				</>
			) : (
				<>
					<BarraPesquisa placeholder="O que deseja encontrar?" />
					<Botao text="Login" className="transparent" />
				</>
			)}

		</header>
	)
}

export default Cabecalho