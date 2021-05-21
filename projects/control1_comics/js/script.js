"use strict";
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

function openComic() {
  open("comic.html", "_self");
}

const button = document.querySelectorAll(".li");
const tab = document.querySelectorAll(".tab");

button.forEach((listLi, i) => {
  button[i].addEventListener("click", () => {
    button.forEach((listLi, i) => {
      button[i].classList.remove("active");
      tab[i].classList.remove("active");
    });
    console.log(button[i]);
    button[i].classList.add("active");
    tab[i].classList.add("active");
  });
});
