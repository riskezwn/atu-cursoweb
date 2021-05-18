"use strict";

const campo_nota = document.getElementById("notamedia");
const campo_resultado = document.getElementById("resultado");

function enviarNotaMedia() {
  var inputs = document.getElementsByClassName("insert");

  let listaNotas = [];
  for (var i = 0; i < inputs.length; i++) {
    listaNotas.push(inputs[i].value);
  }

  sumarArray(listaNotas);
  function sumarArray(listaNotas) {
    let suma = 0;
    let asignaturas = listaNotas.length;
    listaNotas.forEach((i) => {
      suma += Number(i);
    });
    let nota_media = suma / asignaturas;

    function resultadoFinal(nota_media) {
      if (nota_media <= 10) {
        let nota_redondeada = Math.floor(nota_media);
        switch (nota_redondeada) {
          case 10:
          case 9:
            return "Sobresaliente";
          case 8:
          case 7:
            return "Notable";
          case 6:
            return "Bien";
          case 5:
            return "Suficiente";
          default:
            return "Suspenso";
        }
      } else {
        alert("Introduce unas notas válidas");
      }
    }
    campo_nota.innerHTML = nota_media;
    campo_resultado.innerHTML = resultadoFinal(nota_media);
  }
}
