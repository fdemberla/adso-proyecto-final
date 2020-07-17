import React from "react";

const Seccion = ({ encabezado, parrafo, imagen }) => {
  return (
    <div>
      {encabezado ? <h4>{encabezado}</h4> : ""}
      {parrafo ? <p>{parrafo}</p> : ""}
      {imagen && <img alt="imagen" src={imagen} />}
      <br />
    </div>
  );
};

export default Seccion;
