import { pintar } from "./pinta.js";

let formasDeGanar = [
[0,1,2], [3,4,5], [6,7,8], // filas
[0,3,6], [1,4,7], [2,5,8], // columnas
[0,4,8], [2,4,6]]          // diagonales

let estadoVictoria = false;

export function revisar(botones) {
  for (let victorias of formasDeGanar) {
    let ganadores = [botones[victorias[0]],botones[victorias[1]],botones[victorias[2]]];
    estadoVictoria = buscar(ganadores);
    if (seGana()){
      pintar(ganadores);
      break;
    } 
  }
  return estadoVictoria;
}

function buscar(ganadores) {
  if (estaVacio(ganadores[0])) return false;
  if (!sonIguales(ganadores[0], ganadores[1])) return false;
  if (!sonIguales(ganadores[1], ganadores[2])) return false;
  return true;
}

function estaVacio(boton) {
  return boton.innerHTML === "[ ]";
}

function sonIguales(primerBoton, segundoBoton) {
  return primerBoton.innerHTML === segundoBoton.innerHTML;
}

function seGana() {
  return estadoVictoria === true;
}
