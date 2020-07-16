import React from 'react';
import Imagen1 from "../../imagenes/Usuarios/7.png"
import Imagen2 from "../../imagenes/Usuarios/8.png";
import Imagen3 from "../../imagenes/Usuarios/9.png";
import Imagen4 from "../../imagenes/Usuarios/10.png";


const ModificarCuenta = () => {
    return (
			<div>
				<h4>Modificación de cuenta de usuario</h4>
				<p>
					Para modificar una cuenta de usuario, utilizaremos el comando usermod.
				</p>
				<p>
					Comando usermod: Se emplea para modificar algunas propiedades de los
					usuarios como: el login, el directorio base, el Shell que se inicia al
					conectarse, los grupos a los que pertenece, la fecha de expiración de
					la cuenta, etc. También bloquea y desbloquea una cuenta.
				</p>
				<ul className="list-group">
					<li className="list-group-item">
						<p>
							Estableceremos la fecha de expiración de la cuenta de usuario,
							para lo cual utilizaremos el parámetro –e
							<code>usermod –e [AAAA-MM-DD] + nombre de usuario</code>
							<img alt="imagen" src={Imagen1} />
							<p>
								La cuenta de usuario "carlos" expirará el 30 de Mayo del año
								2021.
							</p>
						</p>
					</li>

					<li className="list-group-item">
						<p>
							Para cambiar el nombre de login de una cuenta de usuario,
							utilizamos el parámetro -l
							<code>
								usermod –l [el nuevo nombre de login] [el nombre anterior]
							</code>
							<img alt="imagen" src={Imagen2} />
						</p>
					</li>
					<li className="list-group-item">
						<p>
							Ahora bloquearemos una cuenta de usuario empleando la opción –L.
							<code>usermod –L [nombre de usuario]</code>
							<img alt="imagen" src={Imagen3} />
						</p>
					</li>
					<li className="list-group-item">
						<p>
							Para cambiar la contraseña por medio de este comando, necesitamos
							emplear la opción –p
							<code>usermod –p [nueva contraseña] [nombre de usuario]</code>
							<img alt="imagen" src={Imagen4} />
						</p>
					</li>
				</ul>
			</div>
		);
};

export default ModificarCuenta;
