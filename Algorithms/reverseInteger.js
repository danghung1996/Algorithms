// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var string_x = ''+x;
    var split_x = string_x.split('');
    var string_result = '';
    for(let i = split_x.length-1;i>=0;i--){
	string_result += split_x[i];
	}
    if(x<0){
        string_result = parseInt(string_result)*(-1);
    }
    if(Math.pow(-2,31)>string_result || (Math.pow(2,31)-1) < string_result) return 0;
    console.log(string_result);
    return string_result;
};
reverse(12345);