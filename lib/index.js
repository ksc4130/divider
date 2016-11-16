//dividend/divisor

/*
             ________
    divisor | dividend
*/
function divisionGoneWild(dividend, divisor, cb) {
    //validate request in hopes to ensure success
    //bomb if divisor is 0 
    if(divisor === 0) {
        return new Error('Dividing by zero is not allowed please ensure provided divisor is not 0');
    }

    //ensure dividend is a valid number
    if(dividend === null || typeof Number(dividend) !== 'number') {
        return new Error('Provided dividend value is not a valid number');
    }

    //ensure divisor is a valid number
    if(divisor === null || typeof Number(divisor) !== 'number') {
        return new Error('Provided divisor value is not a valid number');
    }

    //prepare return object
    var toReturn = {
        quotient: 0,
        remainder: 0
    };

    //return quotient: 0 and remainder: 0 when dividend is 0
    console.log('div', dividend);
    if(dividend === 0) {
        return toReturn;
    }

    //when dividend is equal to divisor return 0 per [n] will always go into [n] once
    if(dividend === divisor) {
        toReturn.quotient = 1;
        return toReturn;
    }
    
    //indicates sign contradiction indicating negative quotient
    var signContradiction = dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0;

    //variable to do 
    var toWorkOn = signContradiction ? Math.abs(dividend - divisor) : Math.abs(dividend);
    var absDivisor = Math.abs(divisor);
    
    while(toWorkOn - absDivisor > 0) {
        toWorkOn -= absDivisor;
        toReturn.quotient += 1;
    }
    
    toReturn.quotient = toReturn.quotient * (signContradiction ? -1 : 1);
    toReturn.remainder = (dividend - (toReturn.quotient * divisor));

    //use this guy to ensure remainder is on the right side of zero
    var divisorIsNeg = divisor < 0;//if the divisor is negative then the remainder should be negative
    if(toReturn.remainder > 0 && divisorIsNeg) {
        toReturn.remainder = toReturn.remainder * -1;
    }

    return toReturn;
}

module.exports = divisionGoneWild;