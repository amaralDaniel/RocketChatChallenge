/* eslint-disable no-undef */

const {analyzeTask} = require('../index'); 


test("analyzeTask empty input", () => {
    expect(analyzeTask('')).toBe('');
});

var analyzeTaskExampleMockInput = '2\n1 PT\n2 US\n3\n1 1 10\n2 1 5\n3 2 10';
var analyzeTaskExampleMockOutput = '1 7.50\n2 10.00\nPT 7.50\nUS 10.00';
test("analyzeTask example input", () => {
    expect(analyzeTask(analyzeTaskExampleMockInput)).toBe(analyzeTaskExampleMockOutput);
});

analyzeTaskExampleMockInput = '1\n1 FR\n9\n1 1 30\n1 1 5\n1 1 15\n1 1 25\n1 1 100\n1 1 80\n1 1 2\n1 1 0\n1 1 1';
analyzeTaskExampleMockOutput = '1 28.67\nFR 28.67';
test("analyzeTask single user input", () => {
    expect(analyzeTask(analyzeTaskExampleMockInput)).toBe(analyzeTaskExampleMockOutput);
});

var usersAndCountriesWithoutMentionMockInput = '2\n1 FR\n2 PT\n9\n1 1 30\n1 1 5\n1 1 15\n1 1 25\n1 1 100\n1 1 80\n1 1 2\n1 1 0\n1 1 1';
var usersAndCountriesWithoutMentionMockOutput = '2 0.00\n1 28.67\nPT 0.00\nFR 28.67';
test("users and countries w/o mention should be in the output", () => {
    expect(analyzeTask(usersAndCountriesWithoutMentionMockInput)).toBe(usersAndCountriesWithoutMentionMockOutput);
});

var unmatchingNumberOfUsersMockInput = '3\n1 FR\n2 PT\n9\n1 1 30\n1 1 5\n1 1 15\n1 1 25\n1 1 100\n1 1 80\n1 1 2\n1 1 0\n1 1 1';
var unmatchingNumberOfUsersMockOutput = 'Invalid input';
test("Incorrect input for users", () => {
    expect(analyzeTask(unmatchingNumberOfUsersMockInput)).toBe(unmatchingNumberOfUsersMockOutput);
});

var unmatchingNumberOfTasksMockInput = '2\n1 FR\n2 PT\n9\n1 1 30\n1 1 5 5\n1 1 15\n1 1 25 2\n1 1 100\n1 1 80\n1 1 2\n1 1 0\n1 1 1';
var unmatchingNumberOfTasksMockOutput = 'Invalid input';
test("Incorrect input for tasks", () => {
    expect(analyzeTask(unmatchingNumberOfTasksMockInput)).toBe(unmatchingNumberOfTasksMockOutput);
});

