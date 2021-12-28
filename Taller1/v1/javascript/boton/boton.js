let boton;

export default function crear(texto) {
  boton = document.createElement("BUTTON");
  boton.innerHTML = texto;
  return boton;
}

export function agregarEvento(evento) {
  boton.onclick = evento;
}
