import desactivar from "./desactivaBoton.js"
import {ignorarBotonReiniciar} from "../../utilidades/ignoraBoton.js";

export default function desactivarTodos() {
  let botones = Object.values(document.getElementsByTagName("BUTTON"));
  botones.splice();
  ignorarBotonReiniciar(botones);
  recorrer(botones);
}

function recorrer(botones) {
  botones.forEach((boton) => desactivar(boton));
}