function calculateTax(amount){
    let taxAmount = amount / 10;
    return taxAmount;
}

function convertToUpperCase(text){
    convertedString = text.toUpperCase();
    return convertedString;
}

function findMaximum (num1, num2){
    if (num1 >= num2){
        return num1;
    } else if (num2 > num1){
        return num2;
    }
}

function isPalindrome(word){
    return word == word.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountPercentage){
    discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    return discountedPrice;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };