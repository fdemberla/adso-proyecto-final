import React from "react";

import Imagen1 from "../../imagenes/Usuarios/1.png";
import Imagen2 from "../../imagenes/Usuarios/2.png";
import Imagen3 from "../../imagenes/Usuarios/3.png";
import Imagen4 from "../../imagenes/Usuarios/4.png";

import Seccion from "../../componentes/Seccion";

const parrafos = [
  {
    id: 1,
    encabezado: "",
    parrafo: `1- Para dar inicio con la creación, y administración de usuario; haz click en
Aplicaciones – Accesorios – Terminal root. Debes saberte el password del
superusuario ó root, porque necesitas tener privilegio para administrar cuentas de
usuarios.`,
    imagen: Imagen1,
  },
  {
    id: 2,
    encabezado: "",
    parrafo: (
      <p>
        2- Para la creación de usuarios, emplearemos el comando adduser ó
        useradd. El formato del comando es el siguiente:{" "}
        <code>adduser [Parametro] + nombre del usuario</code>
      </p>
    ),
    imagen: Imagen2,
  },
  {
    id: 3,
    encabezado: "",
    parrafo:
      "3- Ahí mismo te pedirá que introduzca una contraseña para el nuevo usuario.",
    imagen: Imagen3,
  },
  {
    id: 4,
    encabezado: "",
    parrafo:
      "Luego, te pedirá que escriba el nombre completo y otras informaciones del nuevo usuario.",
    imagen: Imagen4,
  },
  {
    id: 5,
    encabezado: "",
    parrafo: (
      <p>
        Al introducir <code>adduser chavez</code>, el comando{" "}
        <code>adduser</code> elegirá el siguiente UID libre (identificador de
        usuario), creará un directorio home llamado chavez, copiará /etc/skel a
        /home/chavez y luego pregunta por un nuevo password para chavez. Esta
        contraseña se guardará encriptada en el archivo /etc/passwd ó en
        /etc/shadow.
      </p>
    ),
  },
  {
    id: 6,
    encabezado: "",
    parrafo: (
      <p>
        Ahora emplearemos algunos parámetros del comando adduser ó useradd.
        <p>Algunas opciones:</p>
        <p>-u : permite especificar el UID.</p>
        <p>-c : añade los valores a la sección de comentarios.</p>
        <p>
          -d : permite especificar el directorio de trabajo, creará
          automáticamente el directorio señalado.
        </p>
        <p>-s : permite establecer el Shell.</p>
      </p>
    ),
  },
  {
    id: 7,
    parrafo: (
      <p>
        Ejemplo:
        <p>
          Si introducimos <code>adduser –c “carlos chavez” carlos.</code>
        </p>
        <p>
          Crea un usuario llamado carlos, y el campo de comentario lo rellena
          con carlos chavez
        </p>
      </p>
    ),
    imagen: Imagen4,
  },
  {
    id: 7,
    parrafo: (
      <p>
        En caso de que quieras que el usuario tenga su propio directorio dentro
        de home, puedes emplear el siguiente parámetro:{" "}
        <code>adduser –d /home/midirectorio carlos</code>
      </p>
    ),
  },
];

const AgregarUsuario = () => {
  return (
    <div>
      <h2>Como agregar un usuario</h2>
      {parrafos.map((seccion) => (
        <Seccion
          key={seccion.id}
          encabezado={seccion.encabezado}
          parrafo={seccion.parrafo}
          imagen={seccion.imagen}
        />
      ))}
    </div>
  );
};

export default AgregarUsuario;
