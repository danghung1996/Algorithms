/* jshint esversion: 6 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 != 0) return false;
    var s_array = s.split('');
    var s_temp = [];
    for (let i = 0; i < s_array.length; i++) {
        if (!checkIsHalf(s_temp, s_array[i])) {
            s_temp.push(s_array[i]);
        } else {
            s_temp = s_temp.slice(0, s_temp.length - 1);
        }
    }
    return s_temp.length == 0;
};

let checkIsHalf = function (s_array, element) {
    var list_template = {
        '}': '{',
        ')': '(',
        ']': '['
    };
    if (s_array.length <= 0) return false;
    if (list_template[element] && s_array[s_array.length - 1] === list_template[element]) return true;
    return false;
};
module.exports = isValid;