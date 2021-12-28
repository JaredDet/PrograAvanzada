function holachao() {
  let celda = document.getElementById("ele100");

  if (esHola(celda.innerHTML)) celda.innerHTML = "Chao";
  else celda.innerHTML = "Hola";
}

function esHola(texto){
    return texto == "Hola";
}