"use strict";

const campo_nota = document.getElementById("notamedia");
const campo_resultado = document.getElementById("resultado");

function calificacion() {
  let inputs = document.querySelectorAll(".insert");
  let calificacion_indiv = document.querySelectorAll(".calif_indiv");
  var nota_redond

  for (let i = 0; i < inputs.length; i++) {
    nota_redond = inputs[i].value 
  }


  
  /* for (let i = 0; i < inputs.length; i++) {
    if (n <= 10 && n >= 0) {
      let nota_redondeada = Math.floor(n);
      console.log('Nota:'+nota_redondeada);
      var calif_nombre;
      switch (nota_redondeada) {
        case 10:
        case 9:
          calif_nombre = "Sobresaliente";
          break;
        case 8:
        case 7:
          calif_nombre = "Notable";
          break;
        case 6:
          calif_nombre = "Bien";
          break;
        case 5:
          calif_nombre = "Suficiente";
          break;
        default:
          calif_nombre = "Suspenso";
          break;
      }
      calificacion_indiv[i].innerHTML = calif_nombre;
    } else {
      alert("Introduce unas notas válidas");
    }
  } */
}

  function enviarNotaMedia() {
    let inputs = document.getElementsByClassName("insert");

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
          campo_nota.innerHTML = "";
          campo_resultado.innerHTML = "";
        }
      }
      campo_nota.innerHTML = nota_media;
      campo_resultado.innerHTML = resultadoFinal(nota_media);
    }
  }
