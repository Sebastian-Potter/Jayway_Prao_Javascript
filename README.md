# Halmstad Prao 

I detta repo hittar du Grundläggande programerings uppgifter.

## Grundläggande Javascript

### Nedan ser vi ett antal uttalande. 

```javascript
var x, y, z;
 x = 5;
 y = 6.5;
 z = x + y;
```

Varje rad i Javascript körs uppifrån och ner precis som när man läser.
Texten förväntar sig att du ska ha läst föregående sida.

Om vi kollar på exemplet ovan så skapar vi tre variabler och sen tilldelar
de varsit värde.

## Data typer

### Tal och Strängar

I Javascript finns två grundläggande data typer. Ovan ser vi två tal. Den
andra typen är strängar. Här under så ser vi ett sträng värde. Den självklara
skillanden mellan tal och strängar är att en sträng är en text. Medans tal 
är siffror. 

```javascript
x = "This is a String";
```

__Utöver de två grundläggande data typerna så finns några fler data typer:__


### Boolean

Detta kan bara hålla två olika typer av värden: Sant eller Falskt dvs true or false.
Den används för att hålla koll på påståenden kolla under:

```javascript
x = 10 > 9; // true
```

Eftersom 10 är större än 9 sä blir detta påstående sant dvs x är true. 

### Arrays/Lists

En array är en samling av element. Den kan innehålla flera olika element av samma typ.

För exemple x = ["a","b","c"]; är en array som innehåller bokstäver. 

Varje bokstav däri är ett element. Dessa kan vi sen hämta från listan/arrayen och jobba med de. 

### Object

Ett object är en datatyp som kan innehålla alla andra datatyper och till och med 
funktioner (vi tar funktioner senare). I exemplet nedan så visar jag hur man 
skulle kunna beskriva en person med hjälp av ett object. Vi kan komma åt informationen
genom att kalla på objectet `person` och vi kan hämta specifik information genom
att hämta det: `person.name -> "name"`.


```javascript
var person = {
    name: "name",
    address: "address",
    age: 26,
    height: "1,8 m"
}
```


### Variablar och Tilldelning

```javascript
var x;
var y = "Also a string";
x = "This is a String";

console.log(x + y);
```
För att tilldela ett värde till ett variable så måste man använda lika med
teknet __=__.
Variablar används för o spara och återanvända information. Enligt exemplet ovan
så har jag variablen x som har ett visst värde. Detta kan jag använda eller
ändra på på andra ställen i koden. Vi ser i exemplet ovan att vi sparar två
text strängar vilket vi sen använder för att skriva till consolen. Värdet 
på variablarna är oförandrat och kan återanvändas på andra ställen. 

### Matte

```javascript
var x, y, z;
y = 10;
x = 50;
z = (x + y) * 10;
z = (x - y) / 10;
```

Programmering är ett logist verksamhet där vi förlitar oss på enkel matte en 
hel del för att utföra enkla uppgifter som t.ex att sortera igenom en lista.
Eller bara räkna ihop värden. 

Ovan ser vi exempel på hur man utför enkla matematiska beräkningar.

### Uttryck

Du använder ett uttryck för att beskriva vad det är du vill åstadkomma.

Räkna ut hur många timmar du har jobbat:
```javascript
var timmar = 8;
var dagar = 5;
var result;

result = timmar * dagar; // 40
result = 8 * 5;          // 40   
```

Sätt ihop ett förnamn och efternam:
```javascript
var fornamn = "Andras";
var efternamn = "Balla";
var result;

result = fornamn + " " +efternamn; // "Andras Balla"
result = "Andras" + " " + "Balla"; // "Andras Balla"
```

Kombinera Tal och text: 
```javascript
var timmar = 8;
var dagar = 5;
var result;

result = "Jobbar " + timmar + " timmar per dag och " + dagar + " dagar i veckan"; 
        // "Jobbar 8 timmar per dag och 5 dagar i veckan"   
```

### Nyckelord 

Det finns ett antal ord i Javascript som är reserverade för specifik funktionalitet.
Som t.ex 

```javascript 
var
function()
Math
String
```

All reserverade ord är byggda att utföra viss funktionalitet som ska underlätta
jobbet för de som programerar. 