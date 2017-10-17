# If function 


```javascript
if (10 === 10){
    console.log("They are the same !")
}else if (10 !== 10 ){
    console.log("Not sure how you managed to get here")
}else {
    console.log("42")
}
```

Ovan vi ser något som heter en If sats. Logiken bakom är Om detta är sant gör
detta annars gör något annat. Påståendet i detta fall är: Är 10 lika med 10 ?
Detta är sant så det som ligger under If satsen kommer att göras. Om första
påståendet är falskt så fortsätter koden i detta fall hittar den en 
else if rad. Detta raden har också ett påstående som behöver vara sant för 
att dess kod skall användas. men om alla andra
påståendet hade varit falska så hade koden under else satsen körts istället.

I filen if-functions.js hittar du 3 övningar att utföra. 

### checkBool()

Den första ska ta emot ett värde true/false och returnera den 
som ett text sträng beroende på den agivna värdet.

### greetings()

Här skickas in ett tal mellan 0 och 24. Svaret skall vara "God morgon", 
"God dag" eller "God kväll beroende på talet". Mellan 0 - 10 är det morgon,
10 - 20 är det dag och 20 - 24 är det kväll. Svaret skall spegla tiden på dagen.

### isValid()

Här skickas in ett tal. Talet kan vara vad som helst men bara ett fåtal tal accepteras
Talet 0, 50 och de som ligger mellan 100 - 150 accepteras dvs return satsen är true,
alla andra tal ska returnera false. 

