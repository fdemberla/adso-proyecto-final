import React from "react";
import Imagen1 from "../../imagenes/Usuarios/14.png";

const CrearGrupos = () => {
  return (
    <div>
      <h1>Crear Grupo</h1>
      <p>
        Los grupos permiten asignar permisos de ficheros y directorios a muchos
        usuarios de una vez. A un grupo pueden pertenecer varios usuarios y un
        usuario puede pertenecer a varios grupos. Un usuario tiene asignado un
        grupo principal o por defecto.
      </p>
      <p>
        Para crear grupos en Linux, utilizamos el comando addgroup ó groupadd.
      </p>
      <p>Comando groupadd ó addgroup: permite añadir un grupo al sistema.</p>
      <div className="container">
        <code>addgroup [nombre del grupo]</code>
        <br />

        <img alt="imagen" src={Imagen1} />
      </div>
    </div>
  );
};

export default CrearGrupos;
