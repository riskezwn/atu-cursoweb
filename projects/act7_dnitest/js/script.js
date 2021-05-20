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
const regexNum = /(\d+)/g;
const nifRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
const inputDNI = document.querySelector(".dni");
const msgDNI = document.querySelector(".msg");

function comprobarDni() {
  let dni = inputDNI.value;
  let dniValido = nifRegex.test(dni);

  if (dniValido) {
    let numerosDNI = dni.match(regexNum);
    let letraDNI = dni.charAt(dni.length - 1);

    let posicion = letras[numerosDNI % 23];
    if (posicion == letraDNI) {
      inputDNI.classList.remove("incorrecto");
      inputDNI.classList.add("correcto");
      msgDNI.innerHTML = "¡Enhorabuena! Tu DNI es correcto.";
    } else {
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
  if (dni == "") {
    inputDNI.classList.remove("incorrecto");
    inputDNI.classList.remove("correcto");
    msgDNI.innerHTML = "";
  }
}
