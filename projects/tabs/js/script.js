"use strict";

const li = document.querySelectorAll(".li");
const bloque = document.querySelectorAll(".bloque");

// Cuando hacemos click en un li
// Todos .li quitar clase activo
// Todos .bloque quitar la clase acitvo
// .li con la posicion le añadimos clase activo
// .bloque con la posicion le añadimos clase activo

//Recorriendo todos los li
li.forEach((cadaLi, i) => {
  //Asignando un click a cada li
  li[i].addEventListener("click", () => {
    //Recorrer todos los .li
    li.forEach((cadaLi, i) => {
      //Quitando la clase de cada li y bloque
      li[i].classList.remove("activo");
      bloque[i].classList.remove("activo");
    });

    //En el li que hemos hecho click le añadimos la clase activo y al bloque de su misma posición
    li[i].classList.add("activo");
    bloque[i].classList.add("activo");
  });
});
