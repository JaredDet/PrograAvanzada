export default function crear(texto) {
  let parrafo = document.createElement("P");
  parrafo.innerText = texto;
  return parrafo;
}
