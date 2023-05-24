import AdicionarProduto from "Pages/AdicionarProduto";
import Inicio from "Pages/Inicio";
import Login from "Pages/Login";
import PaginaBase from "Pages/PaginaBase";
import Produto from "Pages/Produto";
import TodosOsProdutos from "Pages/TodosOsProdutos";
import ProdutosProvider from "contextos/Produtos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
	return (
		<BrowserRouter>
			<ProdutosProvider url="https://my-json-server.typicode.com/Feehh32/space-geek-api/produtos">
				<Routes>
					<Route path="/" element={<PaginaBase />}>
						<Route index element={<Inicio />}></Route>
						<Route path="login" element={<Login />}></Route>
						<Route path="/:id" element={<Produto />}></Route>
						<Route path="adicionar_produto" element={<AdicionarProduto />}></Route>
						<Route path="todos_os_produtos" element={<TodosOsProdutos />}></Route>
					</Route>
				</Routes>
			</ProdutosProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;
