//crearDeck.js
// export const minombre= 'Paco';
import _ from "underscore";
/**
 * jsdoc
 * Esta funcion crea un nuevo deck
 * @param {array<string>} tiposDecarta Ejemplo:  ["C", "D", "H", "S"];
 * @param {array<string>}  tiposEspeciales Ejemplo ["A", "J", "Q", "K"];
 * @returns {array}  retorna un nuevo deck de cartas
 */
// Esta función crea un nuevo deck- export independiente
export const crearDeck = (tiposDecarta, tiposEspeciales) => {

 if (!tiposDecarta || tiposDecarta.length === 0) throw new Error('TiposDeCarta es obligatorio como un arrgelo de sting');
 if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposDeCarta es obligatorio como un arrgelo de sting');


  let deck= [];
  
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDecarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDecarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  
  return deck;
};

 // exportacion por defecto
//  export default crearDeck ;
 
 