let checkNum = require("./script");
let addChar = require("./script");
let deleteChar = require("./script");
let compute = require("./script");

test('Testing Sum for CheckNum function:', () => {
expect(checkNum("7+8")).toBe(true)
});

test('Testing Multiply for checkNum function:', () => {
const text = checkNum("9*42");
expect(text).toBe(true)
});

test('Testing Subtraction for checkNum function:', () => {
const text = checkNum("9-42");
expect(text).toBe(true)
});

test('Testing Brackets for checkNum function:', () => {
const text = checkNum("(8*42)");
expect(text).toBe(true)
});
    
test('Testing Power input for checkNum function:', () => {
const text = checkNum("2^6");
expect(text).toBe(true)
});

test('Testing Exp input for checkNum function:', () => {
const text = checkNum("(2e6)");
expect(text).toBe(true)
});

test('Testing Log input for checkNum function:', () => {
const text = checkNum("(2l6)");
expect(text).toBe(true)
});

test('Testing addChar function:', () => {
    const text = addChar('0', '0');
    expect(text).toBe(true)
    });
   
test('Testing deleteChar function:', () => {
    const text = deleteChar('2^2');
    expect(text).toBe(true)
    });
