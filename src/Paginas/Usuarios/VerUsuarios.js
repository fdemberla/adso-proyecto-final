import React from 'react';
import Seccion from '../../componentes/Seccion';

import Imagen1 from "../../imagenes/Usuarios/5.png"

const VerUsuarios = () => {
    return (
			<div>
				<Seccion
					encabezado={"Comprobar que estos usuarios existen"}
					parrafo={
						<p>
							Para realizar esta acción vamos a emplear el comando grep. El
							comando grep tiene por funcionalidad es la de escribir en salida
							estándar aquellas líneas que concuerden con un patrón. Para
							comprobar que un usuario existe, debes introducir la siguiente
							sintaxis:
							<br />
							<div className="container text-center">
								<code>grep [nombre de usuario] /etc/passwd</code>
								<img className="float-center" alt="asd" src={Imagen1} />
							</div>
							<div className="text-center">
								<b>
									Observa como nos muestra el grupo de ese usuario, el UID, la
									demás informaciones que agregamos.
								</b>
							</div>
						</p>
					}
				/>
			</div>
		);
};

export default VerUsuarios;