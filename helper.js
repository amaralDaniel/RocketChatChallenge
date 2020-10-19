/* eslint-env node */

var avgTimeSpentByUser = (input) => {
    var outputArray = [];
    var currentAvg = 0;
    for (var userID in input) {
        if (Object.prototype.hasOwnProperty.call(input, userID)) {
            if (input[userID].totalTime !== 0 && input[userID].occurrences !== 0) {
                currentAvg = input[userID].totalTime / input[userID].occurrences;
                outputArray.push(`${userID} ${currentAvg.toFixed(2)}\n`);
            } else {
                currentAvg = 0;
                outputArray.push(`${userID} ${currentAvg.toFixed(2)}\n`);
            }
            
        }
    }
    return orderArrayInAscendingOrder(outputArray);
}

var avgTimeSpentByCountry = (input) => {
    var outputArray = [];
    var currentAvg = 0;
    for(var countryCode in input) {
        if (Object.prototype.hasOwnProperty.call(input, countryCode)) {
            if (input[countryCode].totalTime !== 0 && input[countryCode].occurrences !== 0) {
                currentAvg = input[countryCode].totalTime / input[countryCode].occurrences;
                outputArray.push(`${countryCode} ${currentAvg.toFixed(2)}\n`);
            } else {
                currentAvg = 0;
                outputArray.push(`${countryCode} ${currentAvg.toFixed(2)}\n`);
            }
            
        }
    }
    return orderArrayInAscendingOrder(outputArray);
}

var orderArrayInAscendingOrder = (input) => {
    var output = '';
    var aInfo = [];
    var bInfo = []
    input.sort((a, b) => {
        aInfo = a.split(' ');
        bInfo = b.split(' ');

        return aInfo[1] - bInfo[1];
    })

    input.forEach((element) => {
        output += element
    })

    return output;

}

module.exports = {
    avgTimeSpentByUser: avgTimeSpentByUser, 
    avgTimeSpentByCountry: avgTimeSpentByCountry,
    orderArrayInAscendingOrder: orderArrayInAscendingOrder
};
