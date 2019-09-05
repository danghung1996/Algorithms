// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: "()"
// Output: true

// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true

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
            s_temp = s_temp.slice(0, s_temp.length - 1)
        }
    }
    console.log(s_temp.length == 0);
    return s_temp.length == 0;
};

let checkIsHalf = function (s_array, element) {
    var list_template = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    if (s_array.length <= 0) return false;
    if (list_template[element] && s_array[s_array.length - 1] === list_template[element]) return true;
    return false;
}

isValid('{{]]]]}}');