import desactivar from "./desactivaBoton.js"

export default function desactivarTodos() {
  let botones = document.getElementsByTagName("BUTTON");
  recorrer(Object.values(botones));
}

function recorrer(botones) {
  botones.forEach((boton) => desactivar(boton));
}