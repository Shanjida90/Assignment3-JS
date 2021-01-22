// https://github.com/Shanjida90/Assignment3-JS
function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer == 1) {
        meter = kilometer * 1000;
    } else if (kilometer <= 10) {
        var measure = 2 * 1000;
        var remainMeasure = kilometer - 2;
        var reRemainMeasure = remainMeasure * 1000;
        meter = measure + reRemainMeasure;

    }
    return meter;

}
// var count = kilometerToMeter(9);
// console.log(count);


// Budget calculation

function budgetCalculation(watch, phone, laptop) {
    var totalSum = 0;
    if (watch <= 10) {
        var firstThing = 10 * 50;
    } else if (phone <= 10) {
        var secondThing = 10 * 100;
    } else if (laptop <= 10) {
        var thirdThing = 10 * 500;
        var totalSum = firstThing + secondThing + thirdThing;

    }
    return totalSum;
}
var cost = budgetCalculation();
console.log(cost);
//( hotelcost )
function hotelCost(night) {
    var totalCost = 0;
    if (night <= 10) {
        totalCost = night * 100;
    } else if (night <= 20) {
        var begin = 10 * 100;
        var remainNight = night - 10;
        var secondNights = remainNight * 80;
        totalCost = begin + secondNights;
    } else {
        var begin = 10 * 100;
        var secondNights = 10 * 80;
        var remainNight = night - 20;
        var thirdNights = remainNight * 50;
        totalCost = begin + secondNights + thirdNights;

    }
    return totalCost;

}
// var count = hotelCost(30);
// console.log(count);


// megaFriend
function megaFriend(names) {
    var largest = names[0];
    for (var i = 0; i < names.length; i++) {
        var great = names[i];
        if (great.length > largest.length) {
            largest.length = great.length;
        }


    }
    return largest;
}
// var result = megaFriend(["shanjida", "rumi", "sumi", "sagor"]);
// console.log("The largest name is:", result);