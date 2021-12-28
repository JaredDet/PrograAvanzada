import crearMensaje from "./parrafo.js";
import crearContenedor from "./div.js";
import agregarMensaje from "./agregaParrafo.js";
import agregarDiv from "./agregaDivision.js";

export default function lanzarMensaje(texto) {
  let div = generarDiv(texto);
  agregarDiv(div);
}

function generarDiv(texto) {
  let div = crearContenedor();
  let parrafo = crearMensaje(texto);
  agregarMensaje(div, parrafo);
  return div;
}
