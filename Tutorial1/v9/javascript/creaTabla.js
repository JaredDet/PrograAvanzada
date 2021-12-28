let tabla, fila, celda;

function crearTablaColor(idDiv, listaColores) {
  tabla = document.createElement("TABLE");
  tabla.className = "mi_tverde";
  listaColores.forEach((color) => agregarColor(color));
  document.getElementById(idDiv).innerHTML = "";
  document.getElementById(idDiv).appendChild(tabla);
}

function agregarColor(color) {
  fila = document.createElement("TR");
  celda = document.createElement("TD");
  celda.innerHTML = color;
  fila.appendChild(celda);
  celda = document.createElement("TD");
  celda.innerHTML = "[  ]";
  celda.style = `background-color: ${color}`;
  fila.appendChild(celda);
  tabla.appendChild(fila);
}
