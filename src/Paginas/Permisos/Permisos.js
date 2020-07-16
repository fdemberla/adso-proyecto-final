import React from 'react';

const Permisos = () => {
    return (
			<div>
				<h1>Permisos de Usuario en Debian</h1>
				<p>
					Cada archivo o directorio tiene asociados permisos diferentes para el
					propietario, para el grupo y para los demás usuarios. En el caso de
					archivos los permisos que pueden darse o quitarse son: (r) lectura,
					(w) escritura y (x) ejecución. En el caso de directorios los permisos
					son: (r) para listar los archivos, (w) para escribir, crear o borrar
					archivos y (x) para acceder a archivos del directorio.
				</p>
				<p>Los permisos pueden ser definidos en modo octal:</p>
				<ul className="list-group">
					<li className="list-group-item">0= Sin ningún permiso.</li>
					<li className="list-group-item">1= Permiso de Ejecución.</li>
					<li className="list-group-item">2= Permiso de Escritura (Write).</li>
					<li className="list-group-item">4= Permiso de Lectura (Read).</li>
                </ul>
                <br/>
				<p>
					Por ejemplo: <span style={{ color: "blue" }}>6</span>
					<span style={{ color: "red" }}>4</span>
					<span style={{ color: "black" }}>4</span>
				</p>
				<ul className="list-group">
					<li className="list-group-item bg-primary text-white">
						Propietario = 6 (Puede Leer y Escribir).
					</li>
					<li className="list-group-item bg-danger text-white">Grupo = 4 (solo puede Leer).</li>
					<li className="list-group-item">Otros = 4 (solo puede Leer).</li>
				</ul>
			</div>
		);
};

export default Permisos;