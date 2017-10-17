"use strict";

/**
 * Ta emot ett värde true/false och skicka tillbaka dess sträng värde.
 * Ex. Om boolean är true ska strängen "true" returneras.
 * @param boolean Ett boolean värde (true/false)
 * @returns {string} Sträng värde av ingångsparametern.
 */
function checkBool(boolean) {
    // TODO Lägg till din kod.
    if (boolean){
        return "true";
    }else {
        return "false";
    }
}

/**
 * Skapa en sträng som beskriver hur mycket pengar köpet kostade, hur mycket pengar har kunden gett och hur mycket fick kunden tillbaka uppdelat på sedlar.
 * Ex: "Kostnad: 80 kr, Total: 100 kr, Rest 1 st 20 kr
 * Ex: "Kostnad: 60 kr, Total: 100 kr, Rest 2 st 20 kr
 * @param cost Totala priset som har handlats för
 * @param total Pengarna som kunden har get.
 * @returns {string} Skapa en sträng som beskriver hur mycket
 */
function checkNumber(cost, total) {
    var change = total - cost;
    console.log(change);
    // TODO Lägg till din kod

    if(change / 100){
        console.log(change / 100);
        return "";
    }else if (change / 50){

    }else if (change / 20){

    }else if (change / 10){

    }else if (change / 5){

    }else if (change / 2){

    }else {

    }
}

exports.checkBool = checkBool;
exports.checkNumber = checkNumber;