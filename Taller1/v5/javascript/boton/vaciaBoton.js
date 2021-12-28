import activar from "./activaBoton.js";

export default function vaciar(boton) {
  boton.innerHTML = "[ ]";
  vaciarPadre(boton);
  activar(boton);
}

function vaciarPadre(boton) {
  let padre = boton.parentNode;
  padre.className = "";
}
