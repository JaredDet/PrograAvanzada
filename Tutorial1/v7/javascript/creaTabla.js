function crearTabla(){
    let tabla = document.createElement("TABLE");
    tabla.className = "mi_tverde";
    tabla.border = "2px";
    let fila = document.createElement("TR");
    let celda = document.createElement("TD");
    celda.innerHTML = "Hola";
    celda.id = "ele100";
    fila.appendChild(celda);
    celda = document.createElement("TD");
    celda.innerHTML = "Mundo";
    fila.appendChild(celda);
    tabla.appendChild(fila);
    let cuerpo = document.getElementsByTagName("BODY");
    cuerpo[0].appendChild(tabla);
}