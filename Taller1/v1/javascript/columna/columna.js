let columna;

export default function crear(id) {
  columna = document.createElement("TD");
  columna.id = `celda ${id}`;
  return columna;
}

export function agregarBoton(boton) {
  columna.appendChild(boton);
}
