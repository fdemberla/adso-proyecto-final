import React from 'react';
import Imagen1 from "../../imagenes/Usuarios/20.png";


const EliminarGrupo = () => {
    return (
			<div>
				<h4>Eliminar Grupos</h4>
				<p>
					Para eliminar grupos en Linux, utilizamos el comando <b>groupdel</b>
				</p>
				<p>
					Comando groupdel: permite eliminar un grupo del sistema, el grupo no
					podrá ser eliminado si este es el grupo primario de un usuario.
				</p>
				<p>Para cambiar la contraseña, solo debes introducir el comando:</p>
				<div className="text-center">
					<code>groupdel [nombre del grupo]</code>
					<br />
					<img alt="imagen" src={Imagen1} />
					<br />
					<p style={{color: "blue"}}>
						El nombre de login de los usuarios y de los grupos deben ser
						escritos en minúsculas.
					</p>
				</div>
			</div>
		);
};

export default EliminarGrupo;