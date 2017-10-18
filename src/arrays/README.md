# Array
En array är en samling av variabler. Det kan vara en samling av nummer, texter, objekt eller andra arrays.
Varje värde i en array har en adress till sig. Första värdet i en array har adressen `0`, nästa har `1` osv.

Ett exempel på en simpel array kan vara en inköpslista:
* Bröd
* Smör
* Ost
* Cola

Denna inköpslista hade kunnat se ut som nedan.
```javascript
var inkopslista = ["Bröd", "Smör", "Ost", "Cola"];
```
Koden ovan vissar att vi skapar variabeln `inkopslista`. Vi ger den sen värdet array med `[ ]`. Vi fyller arrayen med `String` värden,
värdena är separerade med `,` så koden vet vart ett värde slutar och nästa börjar. Som vi kan se ovan efter `[` så lägger vi in värdet `"Bröd"`
och sedan lägger vi till `,` för att vissa att nästa värde börjar här. `"Cola"` har ingen `,` efter sig för att det är det sista värdet.

En lista med nummer kan se ut som under.
```javascript
var kostnader = [13, 37, 42];
```

## Plocka ut ett värde från en array
För att plocka ut ett värde från en array så tar man variabeln som arrayen ligger i och lägger till nummret till adressen till värdet.
Se koden nedan.
```javascript
var inkopslista = ["Bröd", "Smör", "Ost", "Cola"];
var utplockad = inkopslista[0];
console.log(utplockad);
```
Variabeln `utplockad` blir satt till värdet av arrayen `inkopslista` på adressen `0`. På adressen `0` sitter värdet 
`"Bröd"` så `utplockad` blir satt till `"Bröd"`. `console.log(utplockad)` skriver sedan ut värdet vilket kommer se ut som nedan.
```javascript
Bröd
```
Att plocka ut ett värde ur en array används ofta i loops så som en for-loop. Plocka ut ett värde ur en array, gör något med den
och sedan plocka ut nästa värde ur arrayen och gör samma sak med den tills man har gått igenom alla värden
i arrayen.

## Lägga till värde till en array
Om man har en array med värden och vill lägga till något till den så kan man göra som nedan.
```javascript
var inkopslista = ["Bröd", "Smör", "Ost", "Cola"];
var extra = "Mjölk";
inkopslista.push(extra);
```
Första raden skapar en array med `String` värden och sparar den i variabeln `inkopslista`.

Andra raden skapar en variabel med namnet `extra` och ger den texten `Mjölk` som värde.

Tredje raden tar `inkopslista` och kör funktionen `push` därifrån med variabeln `extra` som parameter.
`push` är funktionen för att lägga till ett värde till en array, `extra` i detta fallet är det värde vi vill lägga till.

### Uppgift 1
I funktionen `skapaArray1()` skapa en array med värdena nedan som strängar och returnera det.
* Ett
* Två
* Tre

I funktionen `skapaArray2()` skapa en array med värdena nedan som nummer och returnera det.
* 1
* 2
* 3

### Uppgift 2
Funktionen `arrayPlock(enArray)` får in en array med värden. Plocka ut det första värdet ur den och returnera det.

### Uppgift 3
`arrayPush(enArray, attPusha)` Funktionen får in en array med värden (`enArray`) och ett värde som ska läggas till (`attPusha`).
Returnera `enArray` med `attPusha` tillagt.