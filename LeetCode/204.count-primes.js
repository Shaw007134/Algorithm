/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.05%)
 * Total Accepted:    211.1K
 * Total Submissions: 750.8K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 *
 * Example:
 *
 *
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 *
 */
/**
 * @param {number} n
 * @return {number}
 */

var isPrimes = function(n) {
  for (var j = 2; j < Math.sqrt(n); j++) {
    if (n % j === 0) return false;
  }
  return true;
};

var countPrimes = function(n) {
  if (n < 3) return 0;
  var res = [];
  for (var i = 0; i < n; i++) {
    res[i] = 1;
  }
  for (var i = 2; i < n; i++) {
    if (res[i] !== 0 && isPrimes(i)) {
      for (var j = 2; j * i < n; j++) {
        res[j * i] = 0;
      }
    }
  }
  var count = 0;
  for (var i = 2; i < n; i++) {
    if (res[i] === 1) count++;
  }
  console.log(count);
  console.log(res);
  return count;
};

countPrimes(10);
