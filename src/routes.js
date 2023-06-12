import AdicionarProduto from "Pages/AdicionarProduto";
import Inicio from "Pages/Inicio";
import Login from "Pages/Login";
import LoginCadastro from "Pages/LoginCadastro";
import NaoEncontrado from "Pages/NaoEncontrado";
import PaginaBase from "Pages/PaginaBase";
import Produto from "Pages/Produto";
import ProdutosBuscados from "Pages/ProdutosBuscados";
import TodosOsProdutos from "Pages/TodosOsProdutos";
import ProdutosProvider from "contextos/Produtos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
	return (
		<BrowserRouter>
			<ProdutosProvider url="http://localhost:8000/produtos">
					<Routes>
						<Route path="/" element={<PaginaBase />}>
							<Route index element={<Inicio />}></Route>
							<Route path="login" element={<Login />}></Route>
							<Route path="adicionar_produto" element={<AdicionarProduto />}></Route>
							<Route path="todos_os_produtos" element={<TodosOsProdutos />}></Route>
							<Route path="produtos_buscados" element={<ProdutosBuscados />}></Route>
							<Route path="login_cadastro" element={<LoginCadastro />}></Route>
							<Route path="/:id" element={<Produto />}></Route>
							<Route path='*' element={<NaoEncontrado />}></Route>
						</Route>
					</Routes>
			</ProdutosProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;
