"use strict";

/**
 * Ta emot ett värde true/false och skicka tillbaka dess sträng värde.
 * Ex. Om boolean är true ska strängen "true" returneras.
 * @param boolean Ett boolean värde (true/false)
 * @returns {string} Sträng värde av ingångsparametern.
 */
function checkBool(boolean) {
    // TODO Lägg till din kod.
}

/**
 * Ta emot ett värde mellan 0 och 24 och svara med ett av tre svar.
 * Svaret kan vara "God morgon", "God dag" eller "God kväll"
 * Morgon sträcker sig fram tills 10 och dag sträcker sig fram tills 20
 * @param time Ett tal mellan 0 och 24.
 * @returns {string} En sträng ("God morgon","God dag","God kväll")
 */
function greetings(time) {
    // TODO lägg till din kod
}

/**
 * Kolla talet om den är giltig.
 * Ett tal är giltig om den är 0 eller 50, alla tal som är mellan 100 och 150 är giltiga allt annat är ogiltigt.
 * Om ett tal är giltigt returnera true annars returnera false.
 * @param number
 * @returns {boolean}
 */
function isValid(number) {
    if (number === 0 ) {
        return true;
    }else if (number <= 150 && number >= 100){
        return true;
    }else {
        return false;
    }
}

exports.checkBool = checkBool;
exports.greetings = greetings;
exports.isValid = isValid;