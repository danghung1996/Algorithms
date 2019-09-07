/* jshint esversion: 6 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let num_tmp = target - nums[i];
        if (map.has(num_tmp)) {
            result.push(map.get(num_tmp), i);
            break;
        }
        map.set(nums[i], i);
    }
    return result;
};
module.exports = twoSum;