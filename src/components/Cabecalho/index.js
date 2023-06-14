import BarraPesquisa from 'components/BarraPesquisa'
import Logo from 'components/Logo'
import styles from './Cabecalho.module.css'
import Botao from 'components/Botao'
import { useLocation, useNavigate} from 'react-router-dom'
import { useContext, useState } from 'react'
import { ProdutosContext } from 'contextos/Produtos'
import UserInfo from 'components/UserInfo'
import { AuthContext } from 'contextos/AuthContext'

function Cabecalho() {
	const mdScreen = window.innerWidth < 1080;
	const location = useLocation();
	const [busca, setBusca] = useState('')
	const { buscarProdutos } = useContext(ProdutosContext);
	const navigate = useNavigate();
	const {user, fazerLogout, logado} = useContext(AuthContext);

	let customizedUrl = '/login';
	let customizedText = 'Login';

	const lowerBusca = busca.toLowerCase();

	const liberator = lowerBusca.length > 0 ? 'auto' : 'none';

	const produtosBuscados = () => {
		buscarProdutos(lowerBusca);
		setBusca('');
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			buscarProdutos(lowerBusca);
			navigate('produtos_buscados')
			setBusca('');
		}
	}

//  is login page serve para definir o que irá aparecer no cabeçalho dependendo da página em que está sendo inserido

	const isLoginPage = location.pathname === '/login' ||
		location.pathname === '/login_cadastro'

	// Para definir a url do botão do cabeçalho

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
							{logado?<UserInfo emailUser={user.email}/>:<Botao url={customizedUrl} text={customizedText} className="transparent" />}
							<BarraPesquisa
								placeholder="O que deseja encontrar?"
								onChange={event => setBusca(event.target.value)}
								value={busca}
								onClick={produtosBuscados}
								onKeyDown={handleKeyDown}
								style={{ pointerEvents: liberator }}
							/>
						</>
						:
						<></>
					}
				</>
			) : (
				<>
					{!isLoginPage ?
						<>
							<BarraPesquisa
								placeholder="O que deseja encontrar?"
								onChange={(event) => setBusca(event.target.value)}
								value={busca}
								onClick={produtosBuscados}
								onKeyDown={handleKeyDown}
								style={{ pointerEvents: liberator }}
							/>
							{logado?<UserInfo emailUser={user.email}/>:<Botao url={customizedUrl} text={customizedText} className="transparent" />}
							
							
						</>
						:
						<></>
					}
				</>
			)}

		</header>
	)
}

export default Cabecalho;