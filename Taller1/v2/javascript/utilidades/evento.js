import {esPar} from "./esPar.js";

let contadorClick = 0;

export function dibujar() {
  let boton = event.target;  
  contadorClick++;
  boton.innerHTML = rayar(boton.innerHTML);
}

function rayar(texto) {
  if (!esPar(contadorClick)) texto = "O";
  else texto = "X";
  return texto;
}
