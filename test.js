const {sum} = require('./app.js');
test('adds 14+9 to equal 23', () =>{
    let total = sum(14,9);
    expect(total).toBe(23)
});







//Euro to USD
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
    expect(dollars).toBe (3.5*1.07)
    // expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})






//USD to YEN
test("One USD should be 156.5", function() {
    // Import the function from app.js
    const { fromUSDToYen} = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromUSDToYen(156.5);

    // If 1 usd is 156.5 yen, then 3.5 usd should be (3.5 * 156.5)
    const expected = 3.5 * 156.5; 
    
    // This is the comparison for the unit test
    expect(dollars).toBe (3.5*156.5)
})