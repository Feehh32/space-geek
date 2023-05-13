import Inicio from "Pages/Inicio";
import PaginaBase from "Pages/PaginaBase";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PaginaBase/>}>
					<Route index element={<Inicio />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
