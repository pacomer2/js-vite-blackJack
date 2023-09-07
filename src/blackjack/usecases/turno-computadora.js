//turno-computadora.js
import { pedirCarta, valorCarta, crearCartasHTML } from "../usecases";

/**
 * turno de la computadora
 * @param {number} puntosMinimos puntos minimos computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elementos HTML para mostrar los puntos
 * @param {divCartasComputadora} divCartasComputadora elementos HTML para mostrar los cartas
 * @param {Array<String>} deck 
 */


// turno de la computadora
 export const turnoComputadora = (puntosMinimos, puntosHTML,divCartasComputadora ,deck) => {

   if (!puntosMinimos) throw new Error('Puntos Minimos son necesarios');
   if (!deck) throw new Error('El Deck falta');
   if (!puntosHTML) throw new Error('Argumentos HTML son necesarios');

   let puntosComputadora = 0;
  

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    //TODO crear carta 
    const imgCarta = crearCartasHTML(carta); 
    
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
}; 
