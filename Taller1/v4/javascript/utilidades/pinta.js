export function pintar(lista) {
  recorrer(lista);
}

function recorrer(lista) {
  lista.forEach((elemento) => pintarFondo(elemento));
}

function pintarFondo(elemento) {
  let padre = elemento.parentNode;
  padre.className = "fondo_verde";
}
