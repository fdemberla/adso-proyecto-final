import React from "react";
import Imagen1 from "../../imagenes/Usuarios/15.png";
import Imagen2 from "../../imagenes/Usuarios/16.png";

const ModifcarGrupos = () => {
  return (
    <div>
      <h1>Modificar Grupo</h1>
      <p>Para crear grupos en Linux, utilizamos el comando groupmod</p>
      <p>Comando groupmod: permite modificar el nombre o GID de un grupo.</p>
      <div className=" text-center">
        <code>groupmod –g [# GID] [nombre del grupo]</code>
        <br />

        <img alt="asd" src={Imagen1} />
      </div>
      <br />
      <p>
        Si queremos cambiarle el nombre a un grupo en especifico, empleamos la
        opción –n
      </p>
      <div className=" text-center">
        <code>
          groupmod –n [nuevo nombre del grupo] [nombre viejo del grupo]
        </code>
        <br />

        <img alt="asd" src={Imagen2} />
      </div>
    </div>
  );
};

export default ModifcarGrupos;
