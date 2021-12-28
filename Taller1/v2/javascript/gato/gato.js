import Tabla, {agregarFila} from "../tabla/tabla.js";
import Fila, {agregarColumna} from "../fila/fila.js";
import Columna, {agregarBoton} from "../columna/columna.js";
import Boton, {agregarEvento} from "../boton/boton.js";
import { dibujar } from "../utilidades/evento.js";

const tabla = Tabla();
let nroID = 0;

export function crearTabla(nroFilas) {
  crearFilas(nroFilas);
  return tabla;
}

function crearFilas(nroFilas) {
  let fila;
  for (let i = 0; i < nroFilas; i++) {
    fila = Fila();
    agregarFila(fila);
    crearColumnas(nroFilas);
  }
}

function crearColumnas(nroColumnas) {
  let columna;
  for (let i = 0; i < nroColumnas; i++) {
    columna = Columna(nroID);
    nroID++;
    agregarColumna(columna);
    crearBotones();
  }
}

function crearBotones() {
  let boton = Boton("[ ]");
  agregarBoton(boton);
  agregarEvento(dibujar);
}

