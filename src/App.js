import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Instalacion from "./Paginas/Instalacion";
import Contraseña from "./Paginas/Contraseña"


function App() {
	return (
		<Router basename="/adso-proyecto-final/">
			<div className="wrapper">
				<nav id="sidebar">
					<div className="sidebar-header">
						<h3>Guias</h3>
					</div>

					<ul className="list-unstyled components">
						<li>
							<NavLink
								className="btn btn-purple text-white"
								activeClassName="btn btn-secondary"
								to="/"
							>
								Instalacion
							</NavLink>
						</li>
						<li>
							<NavLink
								className="btn btn-purple text-white"
								activeClassName="btn btn-secondary"
								to="/contraseña"
							>
								Contraseña
							</NavLink>
						</li>
					</ul>
				</nav>

				<div id="content">
					<Switch>
						<Route exact path="/">
							<Instalacion />
						</Route>
						<Route exact path="/contraseña">
							<Contraseña />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
