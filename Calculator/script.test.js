const { scriptName } = require("yargs");
let checkNum = require("./script");
let addChar = require("./script");
let deleteChar = require("./script");
let compute = require("./script");

test('Testing Sum :', () => {
expect(checkNum("7+8")).toBe(true)
});

test('Testing Multiply:', () => {
const text = checkNum("9*42");
expect(text).toBe(true)
});

test('Testing Subtraction:', () => {
const text = checkNum("9-42");
expect(text).toBe(true)
});

test('Testing Brackets:', () => {
const text = checkNum("(8*42)");
expect(text).toBe(true)
});
    
test('Testing Power:', () => {
const text = checkNum("2^6");
expect(text).toBe(true)
});

test('Testing Exp:', () => {
const text = checkNum("(2e6)");
expect(text).toBe(true)
});

test('Testing Log:', () => {
const text = checkNum("(2l6)");
expect(text).toBe(true)
});
