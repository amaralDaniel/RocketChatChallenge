/* eslint-disable no-undef */

const analyzeTask = require('../index'); 

test("Test example input/ouput", () => {
    expect(analyzeTask('')).toBe('');
});

test("Test example input/ouput", () => {
    expect(analyzeTask('2\n1 PT\n2 US\n\n3\n1 1 10\n2 1 5\n3 2 10')).toBe('1 7.5\n2 10\nPT 7.5\nUS 10');
});

test("Test example input/ouput", () => {
    expect(analyzeTask('2\n1 PT\n2 US\n\n3\n1 1 10\n2 1 5\n3 2 10')).toBe('1 7.5\n2 10\nPT 7.5\nUS 10');
});