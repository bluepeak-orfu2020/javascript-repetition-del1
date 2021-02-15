// ES6 Demo
// import { add, abc } from './math.es6'
// import math from './math.es6'

// Require-uppgift
// Uppgift 11A. Importera modulen math.js och använd dess add-funktion för att summera 5 och 6.
//             Skriv ut resultatet till konsolen.

const math = require('./math');
console.log('math.add', add(2,3));

// Uppgift 11B. Lägg till byggskripts i package.json för att köra webpack. Kalla skriptet "build"
// Uppgift 11C. Lägg till byggskripts i package.json för att köra applikationen webpack har satt
//              ihop. Kalla skriptet "run"