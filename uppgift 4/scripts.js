// Uppgift 4
// Givet följande array, utför de operationer deluppgiftena ber om.

const arr = ['Maria','Erik','Anna','Lars','Margareta','Karl','Elisabeth','Anders','Eva','Johan']

// A) Filtrera bort alla namn som är kortare än 5 tecken

console.log(
    arr.filter(x => x.length >= 5)
);

// B) Mappa om array:en så att den består av objekt på formatet { name: <namn> }
//    Ex: 'Pelle' -> { name: 'Pelle' }

console.log(
    arr.map(x => {
        return { name: x };
    })
);

// C) Skriv en IF som kollar ifall något av namnen i array:en innehåller bokstaven 'r'.
//    Om något av namnen gör det skriv ut 'Ja' annars skriv ut 'Nej'

if (arr.some(x => x.includes('r'))) {
    console.log('Ja');
} else {
    console.log('Nej');
}

// D) Beräkna summan av längden på alla namn i array:en

console.log(
    arr
        .map(x => x.length)
        .reduce((acc, item) => acc + item)
);
