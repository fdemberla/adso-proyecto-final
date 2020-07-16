import React from 'react';
import Seccion from '../../componentes/Seccion';

import Imagen1 from "../../imagenes/Usuarios/6.png"

const CambiarContrasena = () => {
    return (
			<div>
				<h4>Cambiar contraseña</h4>
				<Seccion
					parrafo={
						<p>
							Para cambiarle la contraseña a un usuario en especifico,
							utilizaremos el comando <code>passwd</code>
							Comando passwd: Permite establecer y/o cambiar la contraseña de un
							usuario. También puede bloquear, desbloquear y deshabilitar una
							cuenta. Si se invoca sin argumentos se asume que se está cambiando
							la contraseña del usuario actual. Aquí cambiaremos la contraseña
							del usuario “chavez”; escribiendo <code>passwd chavez</code> y
							presiona Enter.
						</p>
					}
					imagen={Imagen1}
				/>

				<p>
					Observa como te pide la nueva contraseña y la confirmación de la
					misma. Este comando puedes usarlo con cualquier usuario. Ahora veremos
					algunas opciones ó parámetros que pueden ser usado con el comando
					passwd.
					<p>-d : deshabilita la necesidad de contraseña del usuario. </p>
					<p>
						-l : bloquea la cuenta de un usuario añadiendo un signo de
						admiración (!) delante de su contraseña en el archivo /etc/shadow.{" "}
					</p>
					<p>-u : desbloquea la cuenta de un usuario bloqueado.</p>
				</p>
			</div>
		);
};

export default CambiarContrasena;