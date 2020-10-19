
/* eslint-env node */
var {avgTimeSpentByUser} = require("./helper");
var {avgTimeSpentByCountry} = require("./helper");

var analyzeTask = (input) => {
  if (input == "") {
    return "";
  } else {
    var users = {};
    var tasks = {};
    var countries = {};
    var output = "";
    var inputComponents = input.replace(/\n$/, "").split("\n");
    var numberOfUsers = parseInt(inputComponents[0]);
    var i = 1;

    for (i = 1; i < numberOfUsers + 1; i++) {
      var splitUserInfo = inputComponents[i].split(" ");

      users[splitUserInfo[0]] = splitUserInfo[1];
    }

    i += 1;
    for (i; i < inputComponents.length; i++) {
      var splitTaskInfo = inputComponents[i].split(" ");

      if (!Object.prototype.hasOwnProperty.call(tasks, splitTaskInfo[1])) {
        tasks[splitTaskInfo[1]] = {
          totalTime: parseInt(splitTaskInfo[2]),
          occurrences: 1,
        };
      } else {
        tasks[splitTaskInfo[1]].totalTime += parseInt(splitTaskInfo[2]);
        tasks[splitTaskInfo[1]].occurrences += 1;
      }

      var countryCode = users[splitTaskInfo[1]];

      if (!Object.prototype.hasOwnProperty.call(countries, countryCode)) {
        countries[countryCode] = {
          totalTime: parseInt(splitTaskInfo[2]),
          occurrences: 1,
        };
      } else {
        countries[countryCode].totalTime += parseInt(splitTaskInfo[2]);
        countries[countryCode].occurrences += 1;
      }
    }

    output += avgTimeSpentByUser(tasks);
    output += avgTimeSpentByCountry(countries);

    return output.replace(/\n$/, "");
  }
};

module.exports = {analyzeTask: analyzeTask};
