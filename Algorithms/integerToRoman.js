/* jshint esversion: 6 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    if (num < 1 || num > 3999) return 0;
    var define_rmnumber = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    };
    if (define_rmnumber[num]) return define_rmnumber[num];
    var numberTmp = num;
    var result = '';
    if (numberTmp >= 1000) {
        let factor = parseInt(numberTmp / 1000);
        while (factor-- > 0) {
            result += 'M';
        }
        numberTmp = numberTmp % 1000;
    }

    if (numberTmp >= 900) {
        result += 'CM';
        numberTmp = numberTmp % 900;
    }

    if (numberTmp >= 500) {
        result += 'D';
        numberTmp = numberTmp % 500;
    }
    if (numberTmp >= 400) {
        let factor = parseInt(numberTmp / 400);
        while (factor-- > 0) {
            result += 'CD';
        }
        numberTmp = numberTmp % 400;
    }
    if (numberTmp >= 100) {
        let factor = parseInt(numberTmp / 100);
        while (factor-- > 0) {
            result += 'C';
        }
        numberTmp = numberTmp % 100;
    }

    if (numberTmp >= 90) {
        result += 'XC';
        numberTmp = numberTmp % 90;
    }
    if (numberTmp >= 50) {
        result += 'L';
        numberTmp = numberTmp % 50;
    }
    if (numberTmp >= 40) {
        result += 'XL';
        numberTmp = numberTmp % 40;
    }
    if (numberTmp >= 10) {
        let factor = parseInt(numberTmp / 10);
        while (factor-- > 0) {
            result += 'X';
        }
        numberTmp = numberTmp % 10;
    }
    if (numberTmp >= 9) {
        result += 'IX';
        numberTmp = numberTmp % 9;
    }
    if (numberTmp >= 5) {
        result += 'V';
        numberTmp = numberTmp % 5;
    }
    if (numberTmp >= 4) {
        result += 'IV';
        numberTmp = numberTmp % 4;
    }
    if (numberTmp >= 1) {
        let factor = parseInt(numberTmp / 1);
        while (factor-- > 0) {
            result += 'I';
        }
    }
    return result;
};
module.exports = intToRoman;