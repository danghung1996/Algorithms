/*jshint esversion: 6 */
/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function (calories, k, lower, upper) {
    var count = 0, j = 0;
    if (k < 1 || k > calories.length || k > Math.pow(10, 5) || lower < 0 || upper < lower) return 0;
    do {
        let k_day_calories = 0;
        for (j; j < k; j++) {
            k_day_calories += calories[j];
        }
        if (k_day_calories < lower) {
            count--;
        }
        else if (k_day_calories > upper) {
            count++;
        }
        if (j >= calories.length) break;
        k += k;
        if (k > calories.length) k = calories.length;
    } while (true);
    return count;
};