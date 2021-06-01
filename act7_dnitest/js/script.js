"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];
// Expresiones regulares para validar datos
const regexNum = /(\d+)/g;
const nifRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
// Elementos del HTML
const inputDNI = document.querySelector(".dni");
const msgDNI = document.querySelector(".msg");

function comprobarDni() {
  // Se extrae el valor del input, y se comprueba mediante las expresiones regulares si el formato del DNI es válido
  let dni = inputDNI.value;
  let dniValido = nifRegex.test(dni);

  // Se comprueba si el DNI es válido y se ejecuta el código
  if (dniValido) {
    // Se separan los números del DNI en una variable, usando una expresion regular que recoge todos los numeros de un string
    let numerosDNI = dni.match(regexNum);
    // Se separa la letra del DNI, cogiendo el último caracter del string
    let letraDNI = dni.charAt(dni.length - 1);

    // Se calcula la posicion del array "letras", calculandolo mediante el resto
    let posicion = letras[numerosDNI % 23];
    if (posicion == letraDNI) {
      // Si la letra del DNI es igual a la del posición del array, remueve la clase "incorrecto" al input, y despues añade la clase "correcto". Añade un mensaje en el HTML
      inputDNI.classList.remove("incorrecto");
      inputDNI.classList.add("correcto");
      msgDNI.innerHTML = "¡Enhorabuena! Tu DNI es correcto.";
    } else {
      // El caso contrario, quita la clase "correcto" y añade la clase "incorrecto" al input. Añade en este caso un mensaje con los nunmeros del DNI introducidos y la posicion correcta de la letra"
      inputDNI.classList.remove("correcto");
      inputDNI.classList.add("incorrecto");
      msgDNI.innerHTML =
        "Lo sentimos... Tu DNI es incorrecto. El DNI válido sería: " +
        numerosDNI +
        posicion;
    }
  } else {
    alert("Introduce un DNI válido");
  }
}

function reset() {
  let dni = inputDNI.value;
  // Comprueba si el input esta vacío, en este caso, remueve todas las clases secundarias que tenga y además borra el mensaje.
  if (dni == "") {
    inputDNI.classList.remove("incorrecto");
    inputDNI.classList.remove("correcto");
    msgDNI.innerHTML = "";
  }
}
