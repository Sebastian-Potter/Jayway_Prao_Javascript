# Loping/Upprepning (*Loops*)
Ibland så vill man att ett stycke kod ska upprepas flera gånger, ibland per object eller fram tills man hittar ett specifikt värde.

## For-loop
```javascript
var persons = ['Andras', 'Nisse', 'Sara', 'Sebastian'];
```
Om man har en lista med personer som ovan så kanske man vill göra något för varje person i listan.
```javascript
for(var i=0; i < persons.length; i++){
  console.log(persons[i]);
}
```
Koden ovan är en for-loop. texten innanför `( )` betyder:
* Man skapar variabeln `i` och ger den värdet 0.
* Så länge som `i` är mindre än `persons`-listans (*array*) längd gör vad som står innan för `{ }` parenteserna.
* för varje gång vad står innanför `{ }` parenteserna, öka värdet på i med 1.

Variabeln `i` kan sedan användas inuti loopen så som demonstrerat i kodan ovan.
Ovan används `i` för att få rätt person i listan(*array*). Personen skrivs sedan ut i consolen med commandot `console.log("Min Text");`

Koden ovan hade skrivit ut i consolen:
```
Andras
Nisse
Sara
Sebastian
```
### Uppgift 1
**addText**

Funktionen `addText()` har en variabel som heter `text`. Sätt ihop texten till en `String` istället för en `array` med stycken av texten.
Använd en for-loop för att lösa detta och returnerna svaret med `svarText` variabeln 

## While-loop
En while-loop upprepar sig tills vilkoret innanför `( )` inte längre är sant.
```javascript
var text = "";
while(i < 10){
  text += "Loop number: "+i;
  i++;
}
```
Så länge som `i` är mindre än 10, gör detta.

### Uppgift 2
Funktionen `findWhiteSpace(text)` tar emot en text `String`. Använd en while-loop för att hitta alla blankslag/"white spaces" i `text`.
Returnera hur många "white spaces" som hittades.