import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape';
import React from 'react'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
	return (
		<>
			<Cabecalho />
			<Outlet />
			<Rodape />
		</>
	)
}

export default PaginaBase;