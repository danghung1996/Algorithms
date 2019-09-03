// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

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
            result.push(map.get(num_tmp),i);
            break;
        }
        map.set(nums[i], i);
    }
    console.log(result);
    return result;
};
twoSum([3,2,4], 6);