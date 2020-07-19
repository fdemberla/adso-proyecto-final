import React from 'react';

import Imagen1 from "../../imagenes/Archivos/1.png"
import Imagen2 from "../../imagenes/Archivos/5.png"
import Imagen4 from "../../imagenes/Archivos/renombrar.PNG";
import Imagen5 from "../../imagenes/Archivos/Eliminar.PNG"
import Imagen6 from "../../imagenes/Archivos/touch1.PNG";
import Imagen7 from "../../imagenes/Archivos/touch2.PNG";
import Imagen8 from "../../imagenes/Archivos/mkdir1.PNG"
import Imagen9 from "../../imagenes/Archivos/mkdir2.PNG";
import Imagen10 from "../../imagenes/Archivos/rmdir1.PNG";
import Imagen11 from "../../imagenes/Archivos/rmdir2.PNG";


const Archivos = () => {
    return (
      <div>
        <h1>Administracion de Archivos/Directorios</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <h4>Ver archivos en un directorio</h4>
            <p>
              El comando ls (del inglés list, cuya traducción es lista, listado
              o listar) es un comando que pertenecerse a sistema operativo Unix
              y derivados que muestra un listado, de los archivos, enlaces o
              directorios, de un determinado directorio. Los resultados se
              muestran por defecto ordenados alfabéticamente
            </p>
            <h5>Sintaxis</h5>
            <p>
              El comando ls responde a la siguiente sintaxis para opciones
              simples: Si nos encontramos en el directorio{" "}
              <code>ls - [opciones]</code>{" "}
              <p>
                Si queremos listar un directorio en el que no nos encontramos
                posicionados
              </p>
              <code>ls - [opciones] /ruta/absoluta/del/direcotrio</code> y para
              las opciones compuestas:{" "}
              <p>
                Si nos encontramos en el directorio{" "}
                <code>ls - [opciones][opciones]</code>
              </p>{" "}
              <p>
                Si queremos listar un directorio en el que no nos encontramos
                posicionados{" "}
                <code>
                  ls - [opciones][opciones] /ruta/absoluta/del/direcotrio
                </code>
              </p>
            </p>
            <div className="text-center">
              <img src={Imagen1} alt="imagen" />
            </div>
          </li>
        </ul>
        <li className="list-group-item">
          <h4>Copiar, traslado y eliminacion de Archivos</h4>
          <h5>cp</h5>
          <p>
            Es utilizado para hacer una copia de uno o más archivos o
            directorios.
          </p>
          <h5>Sintaxis</h5>
          <div>
            <code>cp [ opción ] ... [ -T ] fuente destino</code>
            <hr />
            <code>cp [ opción ] ... fuente ... directorio</code>
            <hr />
            <code>cp [ opción ] ... -t fuente del directorio ...</code>

            <h5>Opciones:</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <code>-a, –archive:</code>Es una forma de indicarla que al
                realizar la copia, intente conservar la mayor cantidad posible
                de la estructura original de archivos, atributos y metadatos
                asociados.{" "}
              </li>
              <li className="list-group-item">
                <code>-f:</code> forzar la copia eliminando el archivo de
                destino si es necesario. Esta opción no tiene efecto si se usa
                la opción -n / –no-clobber.{" "}
              </li>
              <li className="list-group-item">
                <code>-i, –interactive:</code> Establece que se debe preguntar
                antes de sobrescribir. Sobrescribe la opción -n.
              </li>
              <li className="list-group-item">
                <code>-l:</code> archivos de enlace en lugar de copiar.{" "}
              </li>
              <li className="list-group-item">
                <code>-L:</code> seguir enlaces simbólicos.
              </li>
              <li className="list-group-item">
                <code>-n:</code> sin sobrescribir archivos.
              </li>
              <li className="list-group-item">
                <code>-R:</code> copia recursiva (incluidos los archivos
                ocultos).
              </li>
              <li className="list-group-item">
                <code>UPC:</code> copiar y remplazar cuando la fuente es más
                nueva que el destino.
              </li>
              <li className="list-group-item">
                <code>–attributes-only:</code> Con esto activamos que no copie
                los datos del archivo, simplemente cree un archivo con los
                mismos atributos. Si el archivo de destino ya existe, no
                modifica su contenido. Adicionalmente, podemos controlar
                exactamente qué atributos se copian con la opción –preserve (que
                les explico mas adelante).
              </li>
              <li className="list-group-item">
                <code>–backup [ = control ]:</code> Hace una copia de seguridad
                de cada archivo de destino existente que de lo contrario se
                sobrescribirá o eliminará. El parámetro de control especifica
                qué método de control de versión usar.{" "}
              </li>

              <li className="list-group-item">
                <code>-b:</code> Como –backup, pero no acepta un argumento de
                control, toma el método de control predeterminado para su uso.
              </li>
              <li className="list-group-item">
                <code>–copy-contents:</code> Al operar recursivamente, funciona
                para copiar el contenido de archivos especiales, como FIFO y
                dispositivos que se encuentran en / dev . Por lo general, no se
                recomienda utilizar esta opción, ya que puede tener resultados
                no deseados, como colgar para siempre o llenar todo el disco.
                Sin embargo, esta opción está disponible para algunos casos de
                uso especiales o para personas expertas en el caso.
              </li>
              <li className="list-group-item">
                <code>-d:</code> Copiar enlaces simbólicos, en lugar de los
                archivos a los que se refieren, y preserve los enlaces duros
                entre los archivos fuente en las copias. Igual que ”
                –no-dereference –preserve = links “.
              </li>
              <li className="list-group-item">
                <code>-H:</code> Debe seguir los enlaces simbólicos
                especificados en la línea de comando, pero preservar los enlaces
                descubiertos.
              </li>
              <li className="list-group-item">
                <code>-P, –no-dereference:</code> Nunca seguir los enlaces
                simbólicos en la fuente; copiar enlaces simbólicos como enlaces
                simbólicos. Sin embargo, aún se deben seguir los enlaces
                simbólicos encontrados en el destino.
              </li>
              <li className="list-group-item">
                <code>-v, –verbose:</code> imprimir mensajes informativos.
              </li>
              <li className="list-group-item">
                <code>–help:</code> Muestre un mensaje de ayuda y sale de la
                herramienta.
              </li>
              <li className="list-group-item">
                <code>–version:</code> Información de la versión y sale de la
                herramienta.
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h5>Ejemplo:</h5>
            <img src={Imagen2} alt="imagen" />
          </div>
        </li>
        <li className="list-group-item">
          <h5>mv</h5>
          <p>
            Es utilizado para mover o renombrar uno o más archivos o
            directorios.
          </p>
          <div className="text-center">
            <h5>Sintaxis</h5>
            <p>Cambiar el nombre de un archivo llamado origen a destino</p>
            <code> mv [ opciones ] [ -T ] origen destino</code>
            <p>Mover los archivos origen a un directorio llamado destino:</p>
            <code> mv [ opciones ] origen [ origen2 ...] destino</code>
            <div className="row">
              <div className="col">
                <h5>Ejemplo: Renombrar</h5>
                <img src={Imagen4} alt="imagen" />
              </div>
              <div className="col">
                <h5>Ejemplo: Mover archivo a carpeta</h5>
                <img src={Imagen5} alt="imagen" />
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <h5>rm</h5>
          <p>
            rm significa remove (eliminar o borrar). El comando rm se usa para
            eliminar objetos como archivos, directorios, enlaces simbólicos,
            etc.{" "}
          </p>
          <h5>Sintaxis</h5>{" "}
          <div className="text-center">
            <code>rm [OPCION]... ARCHIVO...</code>
            <h5>Ejemplo</h5>
            <img src={Imagen5} alt="imagen" />
          </div>
        </li>
        <li className="list-group-item">
          <h4>Comando touch</h4>
          <p>
            Actualiza los registros de fecha y hora, con la fecha y hora actual
            de los ficheros indicados como argumento. Si el fichero no existe,
            el comando touch lo crea. Su uso más frecuente es para crear
            archivos.
          </p>
          <h5>Sintaxis</h5>
          <div className="text-center">
            <code>touch [opciones] fichero</code>
          </div>
          <h5>Ejemplos</h5>
          <div className="row text-center">
            <div className="col">
              <h6>Crear un archivo</h6>
              <img src={Imagen6} alt="imagen" />
            </div>
            <div className="col">
              <h6>Crear multiples archivos</h6>
              <img src={Imagen7} alt="imagen" />
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <h4>Crear directorios</h4>
          <h5>mkdir</h5>
          <p>Se utiliza para crear directorios</p>
          <h5>Sintaxis</h5>
          <div className="text-center">
            <code>
              mkdir [ -m = mode ] [ -p ] [ -v ] [ -Z = context ] directorio [
              directorio ...]
            </code>
          </div>
          <h5>Ejemplos</h5>
          <div className="row text-center">
            <div className="col">
              <h6>Crear un directorio</h6>
              <img src={Imagen8} alt="imagen" />
            </div>
            <div className="col">
              <h6>Crear multiples directorios</h6>
              <img src={Imagen9} alt="imagen" />
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <h4>Eliminar directorios</h4>
          <h5>rmdir</h5>
          <p>
            El comando rmdir elimina del sistema de archivos los directorios
            especificados en la línea de comandos, si están vacíos.
          </p>
          <h5>Sintaxis</h5>
          <div className="text-center">
            <code>
              rmdir [ -p ] [ -v | --verbose ] [ --ignore-fail-on-non-empty ]
              directorio ...
            </code>
          </div>
          <h5>Ejemplos</h5>
          <div className="row text-center">
            <div className="col">
              <h6>Eliminar un directorio</h6>
              <img src={Imagen10} alt="imagen" />
            </div>
            <div className="col">
              <h6>Eliminar multiples directorios</h6>
              <img src={Imagen11} alt="imagen" />
            </div>
          </div>
        </li>
      </div>
    );
};

export default Archivos;