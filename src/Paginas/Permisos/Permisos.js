import React from "react";

import Imagen1 from "../../imagenes/Permisos/1.PNG";
import Imagen2 from "../../imagenes/Permisos/2.PNG";
import Imagen3 from "../../imagenes/Permisos/3.PNG";
import Imagen4 from "../../imagenes/Permisos/4.PNG";
import Imagen5 from "../../imagenes/Permisos/5.PNG";

const Permisos = () => {
  return (
    <div>
      <h1>Permisos de Usuario en Debian</h1>
      <p>
        Cada archivo o directorio tiene asociados permisos diferentes para el
        propietario, para el grupo y para los demás usuarios. En el caso de
        archivos los permisos que pueden darse o quitarse son: (r) lectura, (w)
        escritura y (x) ejecución. En el caso de directorios los permisos son:
        (r) para listar los archivos, (w) para escribir, crear o borrar archivos
        y (x) para acceder a archivos del directorio.
      </p>
      <p>Los permisos pueden ser definidos en modo octal:</p>
      <ul className="list-group">
        <li className="list-group-item">0= Sin ningún permiso.</li>
        <li className="list-group-item">1= Permiso de Ejecución.</li>
        <li className="list-group-item">2= Permiso de Escritura (Write).</li>
        <li className="list-group-item">4= Permiso de Lectura (Read).</li>
      </ul>
      <br />
      <p>
        Por ejemplo: <span style={{ color: "blue" }}>6</span>
        <span style={{ color: "red" }}>4</span>
        <span style={{ color: "black" }}>4</span>
      </p>
      <ul className="list-group">
        <li className="list-group-item bg-primary text-white">
          Propietario = 6 (Puede Leer y Escribir).
        </li>
        <li className="list-group-item bg-danger text-white">
          Grupo = 4 (solo puede Leer).
        </li>
        <li className="list-group-item">Otros = 4 (solo puede Leer).</li>
      </ul>
      <p>
        Para nosotros poder otorgar estos permisos utilizamos el comando chmod y
        para definir el propietario (cuyo permiso esta representado por el
        primer número del octal), utilizamos el comando chown.
      </p>
      <p>Veamos este ejemplo:</p>
      <p>
        Tenemos un archivo en el Escritorio, si introducimos el comando ls- l.
        El archivo prueba solo tiene permisos para:
      </p>

      <p>
        Propietario: <span style={{ color: "red" }}>rw</span> (lectura y
        escritura).
      </p>
      <p>
        Grupos: <span style={{ color: "red" }}>r</span> (lectura).
      </p>
      <p>
        Otros: <span style={{ color: "red" }}>r</span> (lectura).
      </p>

      <ul className="list-group">
        <li className="list-group-item">
          <img alt="imagen" src={Imagen1} />
          <p>Cambiaremos lo permisos con:</p>
          <code>chmod 760 prueba</code>
        </li>
        <li className="list-group-item">
          <p>
            Veremos que se han cambiado los permisos de: Propietario (rwx),
            Grupos (rw) y Otros (- - - nulo).
          </p>
          <img alt="imagen" src={Imagen2} />
        </li>
        <li className="list-group-item">
          <p>
            Ahora designaremos otro usuario propietario para este archivo, como
            habrás visto en la imagen anterior el propietario actual del archivo
            es root. Para cambiarlo usamos la siguiente sintaxis:
          </p>
          <code>
            chown [nombre del usuario] [nombre del grupo] [nombre del archivo
            con su extensión]
          </code>
          <p>
            Luego de esto escribe el comando ls –l para visualizar los permisos.
          </p>
          <img alt="imagen" src={Imagen3} />
        </li>
        <li className="list-group-item">
          <p>
            Otra manera de establecer los permisos en un archivo y por ende en
            los usuarios y grupos, es por medio de los signos + (agregar) ó –
            (quitar) seguido de la letra del permiso r (lectura), x (ejecución)
            y w(escritura).
          </p>
          <p>
            Por ejemplo, si escribimos: <code>chmod –r prueba</code>se quitan
            todos los permisos de lectura.
          </p>
          <img alt="imagen" src={Imagen4} />
        </li>
        <li className="list-group-item">
          <p>
            Ya por último, si escribimos <code>chmod +r prueba</code> se
            restablecerá este permiso a todas las secciones (propietarios,
            grupos y otros).
          </p>
          <img alt="imagen" src={Imagen5} />
        </li>
      </ul>
    </div>
  );
};

export default Permisos;
