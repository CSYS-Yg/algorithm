/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 1) return 1
    if (n == 2) return 2
    return climbStairs(n - 1) + (n - 2)
};
// @lc code=end

// climbStairs(15)
console.log("climbStairs(15)", climbStairs(4))
