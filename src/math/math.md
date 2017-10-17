# Matematik (*Math*)

### De grundläggande matematiska operatörerna är:
* \+ Addera (*Add*)
* \- Subtrahera (*Subtract*)
* /  Dividera (*Divide*)
* \* Multiplicera (*Multiply*)
* % Resten (*Remainder*)

#### Kod exempel:
* `1 + 2;` kommer ge svaret  `3`
* `7 - 2;` kommer ge svaret `5`
* `10 / 2;` kommer ge svaret `5`
* `5 * 5;` kommer ge svaret `25`
* `10 % 8` kommer ge svaret `2`

``` javascript
var pengar = 100;
var betala = 25;
pengar = pengar - betala;
```
Variabeln `pengar` börjar med värdet 100 och `betala` börjar med värdet 25.
Sen säger vi att `pengar` har värdet av `pengar - betala`,
100 - 25 vilket blir 75 så `pengar` har nu värdet 75 istället för 100 som den hade ibörjan.

### Uppgift 1
**Simpla matematiska operationer**

Fyll i koden för funktionerna `addera(a, b)`, `subtrahera(a, b)`, `dividera(a, b)`, `multiplicera(a, b)` och `rest(a, b)`.

De får in variablerna `a` och `b` som vi ser i `(a, b)` biten.

### Uppgift 2
**Distans omvandling**

Du ska gå ifrån hemmet till en sportbutik. Du har skrivit in Adressena för ditt hem och butiken men du råkade klicka på något 
och nu vissas distansen i cm istället för meter.

Du har distansen 73 000 cm mellan ditt hem och butiken. För att omvandla till meter så skriver du funktionen `distansOmvandlarn(distans, storleksSkillnad)`.

Fyll in koden för funktionen `distansOmvandlarn(distans, storleksSkillnad)`.
* Variabeln `distans` är distansen
* Variabeln `storleksSkillnad` är storleks skillnaden, exempel 1 cm är 1/100-del så stor som 1 meter`storleksSkillnad` är då `0.01`.

Spara svaret i variabeln `svar` som är redan skapad i funktionen.


### Uppgift 3
**WoW Auction House**

Du vill ha plats för fler förremål i din väska i WoW så du tänker köpa 
`Netherweave Bag` (en sorts väska). Du tänker dig att du behöver nog 3 så man slipper springa 
tillbaka och sälja så ofta. En `Netherweave Bag` kostar 16 guld. Du har 50 guld och vill veta om du har råd att köpa alla väskor du 
behöver så du skriver funktionen `auctionHouse(mittGuld, pris, antal)` som ska kolla hur  mycket guld du har kvar efteråt.

Fyll in koden för funktionen `auctionHouse(mittGuld, pris, antal)`.

* Variabeln `mittGuld` är hur mycket guld du har.
* Variabeln `pris` är hur mycket guld föremålet kostar styck.
* Variabeln `antal` är hur många du vill köpa.

Det finns 1 variabel i funktionen redan skriven: `guldKvar`. Spara antalet guld kvar i 
`guldKvar`.