// Uppgift 7

// A) Använd destructuring för att läsa ut key1 och key2 till
//    variabler från följande objekt. Skriv ut variablerna till konsolen.

const objA = { key1: 123, key2: 'abc', key3: true };

// B) Anropa följande funktion så att resultatet som skrivs till konsolen blir "7"

function funcB({ part1, part2, part3 }) {
  console.log(part1 + part2 * part3);
}

// C) Läs ut det andra elementet från följande array med hjälp av destructuring.
//    Skriv ut resultatet till konsolen.

const arrC = ['a', 'b', 'c']

// D) Anropa följande funktion så att resultatet som skrivs till konsolen blir "12"

function funcD([x, ...y]) {
  const result = y.map(v => x * v)
                  .reduce((acc, v) => acc + v, 0)
  console.log(result);
}

