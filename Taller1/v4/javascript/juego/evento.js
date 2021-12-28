import { esPar } from "../utilidades/esPar.js";
import { seGana } from "./gana.js";
import lanzarMensaje from "./mensaje/lanzaMensaje.js";
import desactivarTodosLosBotones from "../boton/desactivaBotones.js";
import desactivar from "../boton/desactivaBoton.js";

let contadorClick = 0;

export function dibujar() {
  let boton = event.target;
  contadorClick++;
  boton.innerHTML = rayar(boton.innerHTML);
  desactivar(boton);

  if (seGana()) {
    lanzarMensaje(`Ha ganado ${boton.innerHTML}`);
    desactivarTodosLosBotones();
  }
}

function rayar(texto) {
  if (!esPar(contadorClick)) texto = "O";
  else texto = "X";
  return texto;
}
