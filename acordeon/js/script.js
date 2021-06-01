"use strict";

const bloque = document.querySelectorAll(".bloque");
const h2 = document.querySelectorAll(".h2");

// Cuando haga click en H2:
// Quitar clase activo de todos los bloques
// Aadir clase activo al bloque con la misma posicion que el H"

// Recorrer TODOS los H2
h2.forEach((cadaH2, i) => {
  // Asignar un CLICK a todos los H2
  h2[i].addEventListener('click', () => {
    //Recorrer TODOS los bloque  
    bloque.forEach((cadaBloque, i) => {
      // Quitar clase activo a todos los bloques  
      bloque[i].classList.remove("activo");
    });
    // Añadir la clase activo al bloque cuya posición sea igual al del H2
    // (Línea 11)
    bloque[i].classList.add("activo");
  });
});
