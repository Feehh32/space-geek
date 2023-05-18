import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape';
import ScrollToTop from 'components/ScrollToTop';
import React from 'react'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
	return (
		<>
			<ScrollToTop />
			<Cabecalho />
			<Outlet />
			<Rodape />
		</>
	)
}

export default PaginaBase;