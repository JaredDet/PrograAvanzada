let tabla;

export default function crear() {
  tabla = document.createElement("TABLE");
  return tabla;
}

export function agregarFila(fila) {
  tabla.appendChild(fila);
}

export function agregarClaseTabla(texto) {
  tabla.className = texto;
}
