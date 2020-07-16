import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Instalacion from "./Paginas/Instalacion";
import AgregarUsuario from "./Paginas/Usuarios/AgregarUsuario";
import VerUsuarios from "./Paginas/Usuarios/VerUsuarios";
import CambiarContrasena from "./Paginas/Usuarios/CambiarContrasena";
import ModificarCuenta from "./Paginas/Usuarios/ModificarCuenta";
import EliminarCuenta from "./Paginas/Usuarios/EliminarCuenta";
import CrearGrupos from "./Paginas/Grupos/CrearGrupos";
import ModifcarGrupos from "./Paginas/Grupos/ModifcarGrupos";
import GrupoContrasena from "./Paginas/Grupos/GrupoContrasena";
import EliminarGrupo from "./Paginas/Grupos/EliminarGrupo";
import Permisos from "./Paginas/Permisos/Permisos";

const usuarios = [
	{
		id: 1,
		nombre: "Agregar Usuario",
		to: "/agregarusuario",
		componente: <AgregarUsuario />,
	},
	{
		id: 2,
		nombre: "Ver Usuarios",
		to: "/verusuarios",
		componente: <VerUsuarios />,
	},
	{
		id: 3,
		nombre: "Cambiar Contraseña",
		to: "/cambiarcontraseña",
		componente: <CambiarContrasena />,
	},
	{
		id: 4,
		nombre: "Modificar Cuenta",
		to: "/modificarcuenta",
		componente: <ModificarCuenta />,
	},
	{
		id: 5,
		nombre: "Eliminar Cuenta",
		to: "/eliminarcuenta",
		componente: <EliminarCuenta />,
	},
];

const grupos = [
	{
		id: 1,
		nombre: "Crear Grupo",
		to: "/creargrupo",
		componente: <CrearGrupos />,
	},
	{
		id: 2,
		nombre: "Modificar Grupo",
		to: "/modificargrupo",
		componente: <ModifcarGrupos />,
	},
	{
		id: 3,
		nombre: "Contraseña de Grupo",
		to: "/grupocontraseña",
		componente: <GrupoContrasena />,
	},
	{
		id: 4,
		nombre: "Modificar Cuenta",
		to: "/modificarcuenta",
		componente: <ModificarCuenta />,
	},
	{
		id: 5,
		nombre: "Eliminar Grupo",
		to: "/eliminargrupo",
		componente: <EliminarGrupo />,
	},
];

function App() {

	const [showUsuarios, setUsuarios] = useState(false)
	const [showGrupos, setGrupos] = useState(false);
	const [showArchivos, setArchivos] = useState(false);
	const [showPaquetes, setPaquetes] = useState(false);

	return (
		<Router basename="/adso-proyecto-final/">
			<div className="wrapper">
				<nav id="sidebar">
					<div className="sidebar-header">
						<h3>Guias</h3>
					</div>
					<ul className="list-unstyled components">
						<li>
							<button className="btn sidebar-header btn-block text-white">
								<NavLink
									className="btn btn-purple"
									activeClassName="btn btn-light"
									to="/"
								>
									<h5>Instalacion</h5>
								</NavLink>
							</button>
						</li>
						<li>
							<button
								onClick={() => setUsuarios(!showUsuarios)}
								className="btn sidebar-header btn-block text-white"
							>
								<h5>Usuarios</h5>
							</button>
							<ul class={`list-unstyled ${!showUsuarios ? "collapse" : ""}`}>
								{usuarios.map((link) => (
									<li key={link.id}>
										<NavLink
											className="btn btn-purple text-white text-right"
											activeClassName="btn btn-info"
											to={link.to}
										>
											{link.nombre}
										</NavLink>
									</li>
								))}
							</ul>
						</li>
						<li>
							<button
								onClick={() => setGrupos(!showGrupos)}
								className="btn sidebar-header btn-block text-white"
							>
								<h5>Grupos</h5>
							</button>
							<ul class={`list-unstyled ${!showGrupos ? "collapse" : ""}`}>
								{grupos.map((link) => (
									<li key={link.id}>
										<NavLink
											className="btn btn-purple text-white text-right"
											activeClassName="btn btn-info"
											to={link.to}
										>
											{link.nombre}
										</NavLink>
									</li>
								))}
							</ul>
						</li>
						<li>
							<button className="btn sidebar-header btn-block text-white">
								<NavLink
									className="btn btn-purple text-white"
									activeClassName="btn btn-info"
									to="/permisos"
								>
									<h5>Permisos</h5>
								</NavLink>
							</button>
						</li>
						<div className="sidebar-header">
							<h5>Archivos</h5>
						</div>
						<div className="sidebar-header">
							<h5>Paquetes</h5>
						</div>
					</ul>
				</nav>

				<div id="content">
					<Switch>
						<Route exact path="/">
							<Instalacion />
						</Route>
						<Route path="/permisos">
							<Permisos />
						</Route>
						{usuarios.map((route) => (
							<Route key={route.id} path={route.to}>
								{route.componente}
							</Route>
						))}
						{grupos.map((route) => (
							<Route key={route.id} path={route.to}>
								{route.componente}
							</Route>
						))}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
