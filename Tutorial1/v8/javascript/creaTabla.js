function crearTablaColor(idDiv, listaColores) {
  let tabla, fila, celda;
  tabla = document.createElement("TABLE");
  tabla.className = "mi_tverde";
  for (let i = 0; i < listaColores.length; i++) {
    fila = document.createElement("TR");
    celda = document.createElement("TD");
    celda.innerHTML = listaColores[i];
    fila.appendChild(celda);
    celda = document.createElement("TD");
    celda.innerHTML = "[  ]";
    celda.style = `background-color: ${listaColores[i]}`;
    fila.appendChild(celda);
    tabla.appendChild(fila);
  }
  document.getElementById(idDiv).innerHTML = "";
  document.getElementById(idDiv).appendChild(tabla);
}

