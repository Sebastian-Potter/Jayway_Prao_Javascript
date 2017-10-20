# Screeps
Screeps är ett real-time MMO-strategi spel. Där spelarna inte spelar själva utan skriver kod för att spela
för en. Man kan göra saker manuelt igenom att skriva in kommandon i konsolen men målet
är att automatisera sin kod för spelet så mycket som möjligt.

## Uppgift 1 - Tutorial
För att lära sig grunderna för screeps så lär den officiella guiden (tutorial) det mest grundläggande
för att få igång en bas med arbetare som samlar energi och bygger byggnader. Följ stegen nedan.
1. Gå till https://screeps.com/
2. Välj "Sim" för simulation (Ligger i överraden)
3. Välj "Tutorial" för att starta tutorial:en
4. Kör igenom tutorial:en steg 1-5 och läs igenom instruktionerna noggrant

**Tips:** Skriv ner de kommandon för att skapa creeps av de olika slagen.

## Uppgift 2 - Sätta upp tränningsrum
Tränningsrummet (*Training mode*) är ett bra sätt att testa din kod utan att riskera att din riktiga bas slutar fungera.
1. Gå till https://screeps.com/
2. Välj "Sim" för simulation (Ligger i överraden)
3. Välj "Training Mode" för att sätta upp ett rum att testa din kod
4. I "Scrips" fönstret klicka på "Branch"
5. Klona "tutorial-5" och ge den ett eget namn, detta kommer att vara din grund till din egen kod.

## Uppgift 3 - Närmsta källa eller byggnad
I koden från tutorial:en så får du arrays med energikällor och byggnader beroende på situation (`targets` och `sources` variablerna).
Dessa arrays är inte sorterade baserat på avstånd till arbetarn så det kan vara att de får gå en mycket längre distans för att
komma fram till sitt mål.

Uppdaterna din kod så `targets` och `sources` variablerna blir sorterade baserat på hur nära de är till arbetarn som kollar efter
energikällor eller byggnader.

## Uppgift 4 - Automatiskt skapa nya arbetare
Om din bas ska kunna bli automatisk så måste den kunna skapa nya arbetare för att ta över när de gamla dör av.
Uppdatera din kod så att den automatiskt skapar nya arbetare när en dör.

**Tips:** Baserat på hur du implementerar detta så behöver du kanske rensa
minnet (`Memory`).

## Uppgift 5 - Energilagret fullt!
Om alla lagringsplatser för energi är fulla vad gör dina harvesters när de har samlat ihop energi? Står de stilla och gör inget?

Uppdatera din kod så harvesters gör något när de har max energi på sig och alla lager är fulla. Vad de gör är upp till dig. Några förslag finner du nedan.

* Kolla om det finns någon byggplats inom 1 rutas avstånd från harvestern. Om det finns så bygg på den.
* Kolla om det finns någon byggnad inom 1 rutas avstånd från harvestern som inte är på max HP. Om det finns så reparera den.
* Släng all energi på marken som harvestern har på sig. Nu kan han börja jobba igen. (Borde ha ett creep som samlar upp energi som ligger på marken om du slänger det...) **Tips:** kolla om energin på marken är större än 15 (eller 20?) om ett creep ska gå för att plocka upp det.

## Uppgift 6 - Reparation av väggar till max HP? Kanske inte i början...
Koden för att hitta skadade byggnader som du får från tutorial:en har en klar brist, den vill reparera varje byggnad till max HP vilket inte låter så hemskt fram tills man kollar hur mycket HP en vägg kan ha. Ändra koden för att kolla att byggnadens hp är mindre än 10 000 också ovanpå det gamla. T ex (`strucuture.hits < structure.maxhits && structure.hits < 10000`)

## Kod hjälp
```
// Spawn a creep with the name "harvester1"
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], "harvester1");
```
```
// Spawn a creep with the name "builder1" with { role: 'builder' } in its memory
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1',
    { memory: { role: 'builder' } } );
```
```
// Sort sources based on range from the creep
_.sortBy(sources, s => creep.pos.getRangeTo(s))
```


