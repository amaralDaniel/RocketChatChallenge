/* eslint-disable no-undef */
var {avgTimeSpentByUser} = require("../helper");
var {avgTimeSpentByCountry} = require("../helper");
var {orderArrayInAscendingOrder} = require("../helper");


test("avgTimeSpentByUser empty input", () => {
    expect(avgTimeSpentByUser('')).toBe('');
});

test("avgTimeSpentByCountry empty input", () => {
    expect(avgTimeSpentByCountry('')).toBe('');
});

var avgTimeSpentByUserMockInput = 
    {   '1': { totalTime: 5, occurrences: 1 },
        '2': { totalTime: 10, occurrences: 1 } 
    };

test("avgTimeSpentByUser example input", () => {
    expect(avgTimeSpentByUser(avgTimeSpentByUserMockInput)).toBe("1 5.00\n2 10.00\n");
});

var avgTimeSpentByCountryMockInput = 
    {   'PT': { totalTime: 5, occurrences: 1 },
        'US': { totalTime: 10, occurrences: 1 } 
    };
var avgTimeSpentByCountryMockOutput = 'PT 5.00\nUS 10.00\n';
test("avgTimeSpentByCountry example input", () => {
    expect(avgTimeSpentByCountry(avgTimeSpentByCountryMockInput)).toBe(avgTimeSpentByCountryMockOutput);
});

var orderArrayInAscendingOrderMockInput = ['2 22\n', '1 4\n', '5 5\n', '5 6\n', '1 3\n', '6 89\n'];
var orderArrayInAscendingOrderExpectedOutput = '1 3\n1 4\n5 5\n5 6\n2 22\n6 89\n'
test("orderArrayInAscendingOrder orders correctly", () => {
    expect(orderArrayInAscendingOrder(orderArrayInAscendingOrderMockInput)).toBe(orderArrayInAscendingOrderExpectedOutput);
})