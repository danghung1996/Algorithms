/* jshint esversion: 6 */
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
    return parseInt(string_result);
};
module.exports = reverse;