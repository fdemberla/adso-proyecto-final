import React from "react";
import Imagen1 from "../../imagenes/Usuarios/12.png";
import Imagen2 from "../../imagenes/Usuarios/13.png";

const EliminarCuenta = () => {
  return (
    <div>
      <h4>Comando userdel</h4>
      <p>
        Elimina un usuario de <i>/etc/passwd.</i> Este comando no elimina la
        entrada en <i>/etc/group</i> por lo que el grupo que se creó con el
        usuario sigue vigente y hay que eliminarlo de forma manual.
      </p>
      <p>
        Si solo queremos eliminar la cuenta de usuario, sin importar que queden
        sus directorios y demás; utilizamos:{" "}
      </p>
      <code>userdel [nombre de usuario]</code>
      <img alt="imagen" src={Imagen1} />
      <p>Para eliminar una cuenta y su directorio, debemos emplear la opción</p>
      <code>userdel –r</code>
      <img alt="imagen" src={Imagen2} />
    </div>
  );
};

export default EliminarCuenta;
