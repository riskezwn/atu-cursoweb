'use strict';

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
const regexLetra = /[A-Za-z]+/g;
const inputDNI = document.querySelector(".dni");
const msgDNI = document.querySelector(".msg");

function comprobarDni() {
  let dni = document.querySelector(".dni").value;

  if (dni != "") {
    let numerosDNI = dni.match(regexNum);

    let letraIntroducida = dni.charAt(dni.length - 1);
    let letraDNI = letraIntroducida.match(regexLetra);

    if (numerosDNI >= 0 && numerosDNI <= 99999999 && letraDNI != null) {
      let posicion = letras[numerosDNI % 23];
      if (posicion == letraDNI) {
        inputDNI.classList.remove("incorrecto");
        inputDNI.classList.add("correcto");
        msgDNI.innerHTML = "¡Enhorabuena! Tu DNI es correcto.";
      } else {
        inputDNI.classList.remove("correcto");
        inputDNI.classList.add("incorrecto");
        msgDNI.innerHTML = "Lo sentimos... Tu DNI es incorrecto.";
      }
    } else {
      alert("Introduce un DNI válido");
    }
  } else {
    alert("Introduce un DNI");
  }
}

function reset() {
  let dni = document.querySelector(".dni").value;
  if (dni == "") {
    inputDNI.classList.remove("incorrecto");
    inputDNI.classList.remove("correcto");
    msgDNI.innerHTML = "";
  }
}
