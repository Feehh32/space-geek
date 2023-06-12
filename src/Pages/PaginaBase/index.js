import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape';
import ScrollToTop from 'components/ScrollToTop';
import { AuthProvider } from 'contextos/AuthContext';
import { Outlet } from 'react-router-dom'

function PaginaBase() {
	return (
		<>
			<AuthProvider>
				<ScrollToTop />
				<Cabecalho />
				<Outlet />
				<Rodape />
			</AuthProvider>
		</>
	)
}

export default PaginaBase;