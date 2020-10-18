nve
/*var input = `2
1 PT
2 US
3
1 1 10
2 1 5
3 2 10`*/
//var input = '2\n1 PT\n2 US\n\n3\n1 1 10\n2 1 5\n3 2 10';
/* eslint-env node */

var avgTimeSpentByUser = (input) => {
    var output = '';
    for (var userID in input) {
        if (Object.prototype.hasOwnProperty.call(input, userID)) {
            var currentAvg = input[userID].totalTime / input[userID].occurrences;
            output += `${userID} ${currentAvg}\n`;
        }
    }
    return output;
}

var avgTimeSpentByCountry = (input) => {
    var output = '';
    for(var countryCode in input) {
        if (Object.prototype.hasOwnProperty.call(input, countryCode)) {
            var currentAvg = input[countryCode].totalTime / input[countryCode].occurrences;
            output += `${countryCode} ${currentAvg}\n`;
        }
    }
    return output;
}

var analyzeTask = (input) => {

    if (input == '') {
        return '';
    } else {
        var users = {};
    var tasks = {};
    var countries = {};
    var output = '';
    var inputComponents = input.split('\n');
    var numberOfUsers = parseInt(inputComponents[0]);
    var i = 1;

    for (i=1; i<numberOfUsers+1; i++){
        var splitUserInfo = inputComponents[i].split(' ');

        users[splitUserInfo[0]] = splitUserInfo[1] ;
    }

    i+=2;
    for (i; i<inputComponents.length; i++){
        var splitTaskInfo = inputComponents[i].split(' ');

        if (!Object.prototype.hasOwnProperty.call(tasks, splitTaskInfo[1])) {
            tasks[splitTaskInfo[1]] = { totalTime: parseInt(splitTaskInfo[2]), occurrences: 1 };
        } else {
            tasks[splitTaskInfo[1]].totalTime += parseInt(splitTaskInfo[2]);
            tasks[splitTaskInfo[1]].occurrences += 1;
        }

        var countryCode = users[splitTaskInfo[1]];

        if (!Object.prototype.hasOwnProperty.call(countries, countryCode)) {
            countries[countryCode] = { totalTime: parseInt(splitTaskInfo[2]), occurrences: 1 };
        } else {
            countries[countryCode].totalTime += parseInt(splitTaskInfo[2]);
            countries[countryCode].occurrences += 1;
        }
    }

    output += avgTimeSpentByUser(tasks);
    output += avgTimeSpentByCountry(countries);

    return output.replace(/\n$/, "");
    }
    
}

module.exports = analyzeTask;
//console.log(analyzeTask(input));