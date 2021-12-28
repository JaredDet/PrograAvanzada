export function saludar(){
    let boton = event.target;
    let celda = boton.parentNode;
    alert(`Hola ${celda.id}`);
}