import React from "react";

const Paquetes = (props) => {
	return (
		<div>
			<h1>Administracion de Paquetes</h1>
			<ul className="list-group">
				<li className="list-group-item">
					<h4>Sincronizando con los repositorios</h4>
					<p>
						Antes de instalar paquetes, es siempre buena idea, sincronizar con
						los repositorios para así asegurarnos de que obtendremos las ultimas
						versiones de los paquetes a instalar. Recuerda que los comandos en
						esta guía han de ser ejecutados como súper usuario (sudo).
					</p>
					<code>apt-get update</code>
				</li>
				<li className="list-group-item">
					<h4>Actualizando el Sistema</h4>
					<p>
						Luego de haber sincronizado el sistema con los repositorios, podemos
						proceder a actualizar el sistema empleando los siguientes comandos:
					</p>
					<code>apt-get upgrade</code>
				</li>
				<li className="list-group-item">
					<h4>Instalando paquetes</h4>
					<p>
						Los comandos de abajo, permiten instalar tanto paquetes individuales
						como un conjunto de ellos. Ten en cuenta que siempre es recomendable
						sincronizar con los repositorios antes de proceder a la instalación
						de cualquier paquete.
					</p>
					<code>apt-get install [paquete]</code>
					<p>
						<code>#Ejemplo: apt-get install net-tools</code>
					</p>
					<code>apt-get install [paquete1] [paquete2]</code>
					<p>
						<code>#Ejemplo: apt-get install mysql apache2</code>
					</p>
				</li>
				<li className="list-group-item">
					<h4>Removiendo Paquetes</h4>
					<p>
						Estos comandos permiten remover o desinstalar paquetes previamente
						instalados. Simplemente hacen eso, remueven el paquete en cuestión;
						No purgan ni eliminan paquetes innecesarios de tu sistema.
					</p>
					<code>apt-get remove [paquete]</code>
					<code>#Ejemplo: apt-get remove mysql</code>
				</li>
				<li className="list-group-item">
					<h4>Purgando Paquetes</h4>
					<p>
						Para eliminar tanto un paquete como su fichero de configuración
						(habrás notado que en Debian, si eliminas un paquete y lo re
						instalas más tarde, este conservará su configuración y preferencias
						previas) puedes emplear los siguientes comandos:
					</p>
					<code>apt-get remove --purge [paquete]</code>
				</li>
				<li className="list-group-item">
					<h4>Buscar en el cache</h4>
					<p>
						Para buscar un paquete en el cache (puedes figurarlo como si se
						tratase de buscar un paquete en el software center de alguna
						distribución como Mint o Ubuntu) pero en modo de texto, puedes
						emplear los comandos que se muestran a continuación. No es necesario
						que sepas el nombre exacto, cualquier criterio (incluso el texto
						disponible en la descripción del paquete) sirve para el propósito.
					</p>
					<code>apt-cache search [paquete]</code>
				</li>
				<li className="list-group-item">
					<h4>Mostrar Estatus de un paquete</h4>
					<p>
						Estos comandos permiten determinar el estado de un paquete (saber si
						está instalado o no) y presentan ademas información adicional sobre
						el mismo. Todo siempre dentro del terminal.
					</p>
					<code>apt-cache show [paquete]</code>
				</li>
			</ul>
		</div>
	);
};

export default Paquetes;
