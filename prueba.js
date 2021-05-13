'use sctrict'

let nombre = getName();
function getName() {
  let name = prompt("Escribe tu nombre");
  return name;
}
confirm("Seguro que "+nombre+" es tu nombre?")
document.getElementById("nombre").innerHTML = nombre;


let date_box = document.getElementById("fecha");

function generarfecha() {
  let today = new Date();
  
  let date = today.getDate()+' - '+(today.getMonth()+1)+' - '+today.getFullYear();
  let dateAutomatic = today.toDateString();
  let hour = today.getHours()+':'+today.getMinutes();
  
  // console.log(date);
  date_box.innerHTML = 'Fecha manual: '+date+
  ' Hora manual: '+hour+' Fecha automática: '+dateAutomatic;
}
function borrarfecha() {
  date_box.innerHTML = ' ';
}
function changeColor() {
  let texto = document.getElementById("texto");
  if (texto.style.color != "red") {
    texto.style.color = "red";
  } else {
    texto.style.color = "black";
  }
}
function multiplicar(a, b) {
  let campo_resultado = document.getElementById("resultado");

  campo_resultado.innerHTML = a*b;
}
function cerrarVentana() {
   var close = confirm("¿Deseas cerrar la ventana?");
   console.log(close);
   if (close == true) {
    close();
}
}

