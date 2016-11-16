import {
    assert,
    expect
} from 'chai';

import divider from '../lib/index';

describe('divider', () => {
    describe('always pass', () => {
        it('should always pass', () => {
            assert.equal(5, 5);
        });
    });

    describe('should throw execption when passing 0 for divisor', () => {
        it('should bomb divisor is 0', () => {
            expect(divider(2, 0)).to.be.an('error');
        });
    });

    describe('should throw execption when passing null for dividend', () => {
        it('should bomb dividend is null', () => {
            expect(divider(null, 1)).to.be.an('error');
        });
    });

    describe('should throw execption when passing null for divisor', () => {
        it('should bomb divisor is null', () => {
            expect(divider(1, null)).to.be.an('error');
        });
    });


    runTest(0, 5, 0, 0);

    runTest(2, 2, 1, 0);

    runTest(6, 5, 1, 1);

    runTest(6, -5, -2, -4);

    runTest(-6, 5, -2, 4);

    runTest(-6, -5, 1, -1);

    runTest(87546, 72, 1215, 66);

    runTest(240, -25, -10, -10);
});

//test utility function 
function runTest(dividend, divisor, expectedQuotient, expectedRemainder) {
    describe(`should return { quotient: ${expectedQuotient}, remainder: ${expectedRemainder} } given ${dividend}, ${divisor}`, function () {
        var result = divider(dividend, divisor);
        //test result's quotient matches expected
        it(`quotient should be ${expectedQuotient}`, () => {
            assert.equal(result.quotient, expectedQuotient);
        });
        //test result's remainder matches expected
        it(`remainder should be ${expectedRemainder}`, () => {
            assert.equal(result.remainder, expectedRemainder);
        });

        //test: abs of remainder is less than provided divisor
        it('abs remainder is less than provided divisor', () => {
            assert.isBelow(Math.abs(result.remainder), Math.abs(divisor));
        });
    });
}

