"use strict";

const userInput = document.querySelector("#user");
const passInput = document.querySelector("#password");
const errorBox = document.getElementById("error");
const correctBox = document.getElementById("correct");
const send = document.querySelector(".submit");

send.addEventListener("click", () => {
  let user = userInput.value.toLowerCase();
  let pass = passInput.value;

  const separador = " ";
  let nameandsubname = user.split(separador);
  let subname = nameandsubname[1];

  if (user && pass && subname) {
    let subnameLength = subname.length;
    let subnameLengthFormatted = addzero(subnameLength, 3);

    let devpass = "dev" + subname + subnameLengthFormatted;
    let adminpass = "admin" + subname + subnameLengthFormatted;

    if (pass == devpass) {
      errorBox.style.display = "none";
      correctBox.style.display = "block";
      setTimeout(() => {
        open("/develop_panel.html", "_self");
      }, 1000);
    } else if (pass == adminpass) {
      errorBox.style.display = "none";
      correctBox.style.display = "block";
      setTimeout(() => {
        open("/admin_panel.html", "_self");
      }, 1000);
    } else {
      passInput.style.boxShadow = "0 0 0 2px #fc3d27";
      errorBox.innerHTML = "&#xf084;  Contraseña incorrecta";
      errorBox.style.display = "block";
    }
  } else {
    errorBox.style.display = "block";
  }
});

function addzero(number, width) {
  var numberOutput = Math.abs(number); /* Valor absoluto del número */
  var length = number.toString().length; /* Largo del número */
  var zero = "0"; /* String de cero */

  if (width <= length) {
    if (number < 0) {
      return "-" + numberOutput.toString();
    } else {
      return numberOutput.toString();
    }
  } else {
    if (number < 0) {
      return "-" + zero.repeat(width - length) + numberOutput.toString();
    } else {
      return zero.repeat(width - length) + numberOutput.toString();
    }
  }
}

