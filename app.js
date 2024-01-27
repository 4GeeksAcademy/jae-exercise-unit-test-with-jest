const sum =(a,b) => {
    return a + b
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
module.exports = {sum, fromEuroToDollar}


const fromUSDToYen = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the Yen value
    return valueInYen;
}
module.exports = {sum, fromUSDToYen}