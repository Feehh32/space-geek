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
	let customizedText = 'Login';
	let customizedUrl = '/login';

	const isLoginPage = location.pathname === '/login' ||
		location.pathname === `/${parametros.id}` ||
		location.pathname === '/todos_os_produtos';

	if (location.pathname === '/adicionar_produto') {
		customizedText = 'Menu administrador';
		customizedUrl = '/todos_os_produtos';
	}

	return (
		<header className={styles.cabecalho}>

			<Logo />
			{mdScreen ? (
				<>

					{!isLoginPage ?
						<>
							<Botao url={customizedUrl} text={customizedText} className="transparent" />
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
							<Botao url={customizedUrl} text={customizedText} className="transparent" />
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