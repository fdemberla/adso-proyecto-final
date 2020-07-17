import React from "react";
import Imagen1 from "../../imagenes/Usuarios/17.png";
import Imagen2 from "../../imagenes/Usuarios/18.png";
import Imagen3 from "../../imagenes/Usuarios/19.png";

const GrupoContrasena = () => {
  return (
    <div>
      <h4>Cambiar Contraseña</h4>
      <p>Para crear grupos en Linux, utilizamos el comando gpasswd.</p>
      <p>
        Comando gpasswd: permite administrar los grupos. Se puede utilizar para
        añadir y eliminar usuarios, señalar un administrador e indicar un
        password para el grupo.
      </p>
      <p>Para cambiar la contraseña, solo debes introducir el comando:</p>
      <div className="text-center">
        <code>gpasswd + [nombre del grupo]</code>
        <br />
        <img alt="imagen" src={Imagen1} />
      </div>
      <br />

      <p>
        Para designar como administrador del grupo un usuario en especifico,
        debes utilizar la opción –A
      </p>
      <div className="text-center">
        <code>gpasswd –A [usuario] [nombre del grupo]</code>
        <br />
        <img alt="imagen" src={Imagen2} />
      </div>
      <br />

      <p>Para agregar un usuario al grupo, debes emplear la opción -a</p>
      <div className="text-center">
        <code>gpasswd –a [usuario] [nombre del grupo]</code>
        <br />
        <img alt="imagen" src={Imagen3} />
      </div>
    </div>
  );
};

export default GrupoContrasena;
