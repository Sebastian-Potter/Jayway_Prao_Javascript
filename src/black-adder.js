"use strict";

exports.add = function() {
    var i;
    var result = 0;
    for (i = 0; i < arguments.length; i += 1) {
        if (isNaN(parseFloat(arguments[i]))) {
            result = "error";
            break;
        }else if (typeof arguments[i] === "number") {
            result += arguments[i];
        }else if(parseFloat(arguments[i]) !== isNaN) {

            result += parseFloat(arguments[i].replace(",", "."));
        }

    }
    return result;
  //var sum = calc.add(1, 3);
    //console.log(sum);
    // return parseFloat(arguments[i])
};