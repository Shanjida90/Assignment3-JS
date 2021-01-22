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
var count = kilometerToMeter(9);
console.log(count);


// Budget calculation
// function budgetCalculator(watch, phone, laptop) {
//     var totalBudget = 0;
//     if (watch <= 10) {
//         var watchPrice = 50 * 10;
//         totalBudget = watchPrice;
//     } else if (phone <= 10 && laptop <= 10) {
//         var phonePrice = 100 * 10;
//         var laptopPrice = 500 * 10;
//         var togetherPrice = phonePrice + laptopPrice;
//         totalBudget = togetherPrice + watchPrice;
//     }
//     return totalBudget;
// }
// var allprice = budgetCalculator(10);
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
var count = hotelCost(30);


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
var result = megaFriend(["shanjida", "rumi", "sumi", "sagor"]);