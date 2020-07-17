import React from "react";

import imagen1 from "../imagenes/Instalacion/1.png";
import imagen3 from "../imagenes/Instalacion/3.png";
import imagen4 from "../imagenes/Instalacion/4.png";
import imagen5 from "../imagenes/Instalacion/5.png";
import imagen8 from "../imagenes/Instalacion/8.png";
import imagen9 from "../imagenes/Instalacion/9.png";
import imagen10 from "../imagenes/Instalacion/10.png";
import imagen11 from "../imagenes/Instalacion/11.png";
import imagen12 from "../imagenes/Instalacion/12.png";
import imagen14 from "../imagenes/Instalacion/14.png";
import imagen15 from "../imagenes/Instalacion/15.png";
import imagen16 from "../imagenes/Instalacion/16.png";
import imagen17 from "../imagenes/Instalacion/17.png";
import imagen18 from "../imagenes/Instalacion/18.png";
import imagen21 from "../imagenes/Instalacion/21.png";
import imagen22 from "../imagenes/Instalacion/22.png";
import imagen23 from "../imagenes/Instalacion/23.png";
import imagen24 from "../imagenes/Instalacion/24.png";
import imagen28 from "../imagenes/Instalacion/28.png";
import imagen30 from "../imagenes/Instalacion/30.png";
import imagen33 from "../imagenes/Instalacion/33.png";
import imagen34 from "../imagenes/Instalacion/34.png";
import imagen36 from "../imagenes/Instalacion/36.png";
import imagen37 from "../imagenes/Instalacion/37.png";
import imagen38 from "../imagenes/Instalacion/38.png";
import imagen39 from "../imagenes/Instalacion/39.png";

const Instalacion = () => {
  return (
    <div>
      <h2>Instalacion de Debian 10</h2>
      <h4>
        1. Descargamos la Imagen de Debian desde la{" "}
        <a
          className="text-info"
          href="https://www.debian.org/CD/http-ftp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          web oficial.
        </a>
      </h4>
      <h4>
        2. Montamos la imagen e iniciamos el proceso de instalacion. En este
        caso seleccionamos la instalacion grafica o "Graphical Install".
      </h4>
      <img alt="imagen" src={imagen1}></img>

      <br />

      <h4>
        3. En esta pantalla seleccionamos el lenguaje de instalacion y el pais
        donde estamos ubicados. Esto comenzara la instalacion
      </h4>
      <img alt="imagen" src={imagen3} />
      <img alt="imagen" src={imagen4} />
      <br />
      <h4>4. Configuramos el teclado que estamos utilizando</h4>
      <p>
        Esto es para que el paquete de instalacion sepa que teclas estamos
        utilizando segun nuestra configuracion regional
      </p>

      <img alt="imagen" className="mx-auto d-block" src={imagen5} />

      <br />
      <h4>
        5. Luego introducimos un nombre de hostname, o nombre de la maquina
      </h4>
      <p>
        Este puede ser cualquier nombre, en este caso lo dejaremos como{" "}
        <b>Debian.</b>
      </p>

      <img alt="imagen" className="mx-auto d-block" src={imagen8} />

      <br />
      <h4>
        6. Luego introducimos el nombre de dominio de red, esto puede ser
        inventado si estamos en una red domestica, sin embargo si estamos en una
        red corporativa donde si existe un nombre de dominio debemos asegurarnos
        de que este equipo tenga el mismo nombre de dominio que todos los
        equipos en la red.
      </h4>
      <img alt="imagen" className="mx-auto d-block" src={imagen9} />
      <br />
      <h4>7. Configuramos la contraseña del super usuario.</h4>
      <p>
        Esta es la contraseña para el usuario "root". Esta es la cuenta de
        administracion de sistema. Procurar seguir las sugerencias que nos da el
        instalador para hacer una contraseña segura, pues si esta contraseña es
        descifrada por algun intruso esta le dara control absoluto sobre nuestro
        sistema.
      </p>
      <img alt="imagen" className="mx-auto d-block" src={imagen10} />
      <br />
      <h4>
        8. Ahora configuramos una cuenta de usuario para utilizar en vez de la
        cuenta de superusuario, definimos un nombre de usuario y contraseña.
      </h4>
      <img alt="imagen" src={imagen11} />
      <img alt="imagen" src={imagen12} />
      <br />
      <h4>9. Configuramos la particion del disco del sistema.</h4>
      <img alt="imagen" src={imagen14} />
      <img alt="imagen" src={imagen15} />
      <img alt="imagen" src={imagen16} />
      <img alt="imagen" src={imagen17} />
      <img alt="imagen" className="mx-auto d-block" src={imagen18} />
      <br />
      <h4>
        10. Si tenemos un disco con paquetes adicionales para instalar, podemos
        insertarlo y el instalador instalara los paquetes detectados, en este
        caso, no tenemos disco adicional, asi que continuamos con la instalacion
        normalmente.
      </h4>
      <img alt="imagen" className="mx-auto d-block" src={imagen21} />
      <br />
      <h4>
        11. Ahora configuraremos el gestor de paquetes, debemos seleccionar de
        donde nuestro sistema operativo instalara sus paquetes, podemos
        seleccionar un pais cercano, pero esta podria no ser la mejor opcion
        debido a la disponibilidad de los servidores.
      </h4>
      <img alt="imagen" src={imagen22} />
      <img alt="imagen" src={imagen23} />
      <br />
      <h4>12. Configuracion del proxy.</h4>
      <p>
        Si estamos en una red corporativa, generalmente nuestro trafico de red
        va a pasar por un servidor proxy, si este no es el caso, se debe dejar
        en blanco este espacio y continuar con la instalacion.
      </p>
      <img alt="imagen" className="mx-auto d-block" src={imagen24} />

      <br />
      <h4>
        13. Decidimos si queremos que nuestro sistema envie estadisticas
        anonimas a los desarrolladores. En este caso seleccionaremos la opcion
        No.
      </h4>
      <img alt="imagen" className="mx-auto d-block" src={imagen28} />
      <br />
      <h4>14. Debian nos permite instalar varios paquetes adicionales.</h4>
      <p>
        En este caso instalamos la interfaz grafica GNOME y OpenSSH para poder
        acceder al sistema a traves de SSH.
      </p>
      <img alt="imagen" className="mx-auto d-block" src={imagen30} />

      <br />

      <h4>15. GRUB</h4>
      <p>
        Como no hay otros sistemas operativos instalados, instalamos el cargador
        de arranque GRUB.
      </p>
      <img alt="imagen" src={imagen33} />
      <img alt="imagen" src={imagen34} />

      <br />

      <h4>16. Finalizacion de la instalacion e inicio del sistema.</h4>
      <p>
        Al finalizar la instalacion nuestro sistema se va a reiniciar,
        selecionamos el sistema operativo de arranque, luego seleccionamos
        nuestro usuario, introducimos nuestra contraseña y el sistema estara
        instalado.
      </p>
      <img alt="imagen" src={imagen36} />
      <img alt="imagen" src={imagen37} />
      <img alt="imagen" src={imagen38} />
      <img alt="imagen" src={imagen39} />
    </div>
  );
};

export default Instalacion;
