"use strict";

function printTipoBomba() {
  let bomba = parseInt(prompt("Introduce el número de bomba (1, 2, 3 o 4)"));
  let tipoBomba;

  if (bomba >= 1 && bomba <= 4) {
    switch (bomba) {
      case 1:
        tipoBomba = "de agua";
        break;
      case 2:
        tipoBomba = "de gasolina";
        break;
      case 3:
        tipoBomba = "de aire";
        break;
      case 4:
        tipoBomba = "de gas";
        break;
    }
    console.log(tipoBomba);
    alert("El tipo de la bomba es " + tipoBomba);
  } else {
    alert("Introduce un tipo de bomba válido");
  }
}
