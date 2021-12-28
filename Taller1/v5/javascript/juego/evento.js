import { esPar } from "../utilidades/esPar.js";
import { seGana } from "./gana.js";
import lanzarMensaje from "./mensaje/lanzaMensaje.js";
import desactivarBotonesGato from "../boton/desactivaBotones.js";
import desactivar from "../boton/desactivaBoton.js";
import vaciar from "../boton/vaciaBoton.js";
import { ignorarBotonReiniciar } from "../../utilidades/ignoraBoton.js";
let contadorClick = 0;

export function dibujar() {
  let boton = event.target;
  contadorClick++;
  boton.innerHTML = rayar(boton.innerHTML);
  desactivar(boton);

  if (seGana()) {
    lanzarMensaje(`Ha ganado ${boton.innerHTML}`);
    desactivarBotonesGato();
  }
}

export function reiniciar() {
  if (!seGana()) lanzarMensaje(`Empate X-O`);
  let botones = Object.values(document.getElementsByTagName("BUTTON"));
  ignorarBotonReiniciar(botones);
  botones.forEach((boton) => vaciar(boton));
  contadorClick = 0;
}

function rayar(texto) {
  if (!esPar(contadorClick)) texto = "O";
  else texto = "X";
  return texto;
}
