"use strict";

// Constantes para calcular dechas
const fecha = new Date();
const fechaTxt = document.querySelector(".fecha");
const meses = new Array(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);
const diasSemana = new Array(
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
);

// Ejecutar funcion para mostrar fecha al cargar el documento
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  fechaTxt.innerHTML =
    "Hoy es " +
    diasSemana[fecha.getDay()] +
    ", " +
    fecha.getDay() +
    " de " +
    meses[fecha.getMonth()] +
    " de " +
    fecha.getFullYear() +
    " | " +
    fecha.getHours() +
    ":" +
    fecha.getMinutes();
});

// Apertura de página desde el index
function openComic() {
  open("comic.html", "_self");
}

// Constantes para refernciar elementos del HTML
const button = document.querySelectorAll(".li");
const tab = document.querySelectorAll(".tab");

// Se recorre con un forEach todos los elementos li (botones)
button.forEach((listLi, i) => {
  // Se añade un click con una función a cada botón
  button[i].addEventListener("click", () => {
    // Se recorren todas los elementos de nuevo y se elimina la clase "active" de todas los elementos
    button.forEach((listLi, i) => {
      button[i].classList.remove("active");
      tab[i].classList.remove("active");
    });
    // Se añade al elemento boton especifico y su correspondiente tab o viñeta la clase "active"
    button[i].classList.add("active");
    tab[i].classList.add("active");
  });
});
