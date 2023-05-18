import BarraPesquisa from 'components/BarraPesquisa'
import Logo from 'components/Logo'
import React from 'react'
import styles from './Cabecalho.module.css'
import Botao from 'components/Botao'
import { useLocation, useParams } from 'react-router-dom'

function Cabecalho() {
	const mdScreen = window.innerWidth < 1024;
	const location = useLocation();
	const parametros = useParams();
	
	const isLoginPage = location.pathname === '/login' || location.pathname === `/${parametros.id}`

	return (
		<header className={styles.cabecalho}>

			<Logo />
			{mdScreen ? (
				<>

					{!isLoginPage ?
						<>
							<Botao url="/login" text="Login" className="transparent" />
							<BarraPesquisa placeholder="O que deseja encontrar?" />
						</>
						:
						<>
							<BarraPesquisa placeholder="O que deseja encontrar?" />
						</>
					}
				</>
			) : (
				<>
					{!isLoginPage ?
						<>
							<BarraPesquisa placeholder="O que deseja encontrar?" />
							<Botao url="/login" text="Login" className="transparent" />
						</>
						:
						<>
							<BarraPesquisa placeholder="O que deseja encontrar?" />
						</>
					}
				</>
			)}

		</header>
	)
}

export default Cabecalho