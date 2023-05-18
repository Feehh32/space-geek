import Inicio from "Pages/Inicio";
import Login from "Pages/Login";
import PaginaBase from "Pages/PaginaBase";
import Produto from "Pages/Produto";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PaginaBase/>}>
					<Route index element={<Inicio />}></Route>
					<Route path="login" element={<Login />}></Route>
					<Route path="/:id" element={<Produto />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
