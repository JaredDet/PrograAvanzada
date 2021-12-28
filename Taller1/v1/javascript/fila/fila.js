let fila;

export default function crear() {
  fila = document.createElement("TR");
  return fila;
}

export function agregarColumna(columna) {
  fila.appendChild(columna);
}