"use strict";

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number}}
 */
function descriptiveStatistics(number) {
    // TODO: Write your code here.

    return {
        maximum: max(number.slice()),
        mean: mean(number),
        median: median(number),
        minimum: min(number.slice()),
        range: range(number)
    };
}

function max(array) {
    var temp = array.sort(function(a, b) {return b - a;});
    return temp[0];
}

function mean(array) {
    // Calculates the sum of Data.
    var sum = array.reduce(function(a, b) {
        return a + b;
    });

    // Uses the var sum to calculate the average value of Data.
    return sum / array.length;
}

function median(array) {
    var position = array.length / 2;
    var result = 0;
    if (array.length % 2 === 0) {
        result = (array[position] + array[position - 1]) / 2;
    }else {
        result = array[Math.floor(position)];
    }
    return result;
}

function min(array) {
    var temp = array.sort(function(a, b) {return a - b;});
    return temp[0];
}

function range(array) {
    return max(array) - min(array);
}

/*// TODO: Write your code here.

exports.descriptiveStatistics = descriptiveStatistics;
exports.maximum = undefined;
exports.mean = undefined;
exports.median = undefined;
exports.minimum = undefined;
exports.range = undefined;*/

// TODO: Write your code here.

exports.descriptiveStatistics = descriptiveStatistics;
exports.maximum = max;
exports.mean = mean;
exports.median = median;
exports.minimum = min;
exports.range = range;