//pedirCartas.js

/**
 * 
 * @param {array<string>} deck es un arreglo de string  
 * @returns {string} retornacarta del deck
 */


// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
