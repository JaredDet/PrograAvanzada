import {agregar} from "./utilidades/agregaTabla.js";
import {crearTabla} from "./javascript/gato/gato.js"
import crearBotonReiniciar from "./javascript/boton/botonReiniciar.js"

let gato = crearTabla(3);
agregar("aqui", gato);
crearBotonReiniciar();

