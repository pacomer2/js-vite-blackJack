//crear-carta-html.js
/**
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de la carta 
 */

export const crearCartasHTML= ( carta) =>{

 if (!carta) throw new Error('fALTA LA CARTA');


const imgCarta = document.createElement("img");
imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
imgCarta.classList.add("carta");

return imgCarta;

};
