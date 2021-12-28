import Tabla, { agregarClaseTabla, agregarFila } from "../tabla/tabla.js";
import Fila, { agregarColumna } from "../fila/fila.js";
import Columna, { agregarClaseColumna } from "../columna/columna.js";
import {estaOk} from "../utilidades/estaOk.js"

const tabla = Tabla();
let nroID = 0;
const nroFilas = 5;
const nroColumnas = 6;
let nroFila, nroColumna;

export function crearTabla() {
  agregarClaseTabla("ambiente");
  crearFilas(nroFilas);
  return tabla;
}

function crearFilas(nroFilas) {
  let fila;
  for (nroFila = 0; nroFila < nroFilas; nroFila++) {
    fila = Fila();
    agregarFila(fila);
    crearColumnas(nroColumnas);
  }
}

function crearColumnas(nroColumnas) {
  let columna;
  for (nroColumna = 0; nroColumna < nroColumnas; nroColumna++) {
    columna = Columna(nroID);
    nroID++;
    if (estaOk(nroFila, nroColumna)) agregarClaseColumna("celula viva");
    else agregarClaseColumna("celula muerta");
    agregarColumna(columna);
  }
}


