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
var countPrimes = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n < 4) return 2;
  var temp = {};
  if (temp[n - 1] == null) {
    temp[n - 1] = countPrimes(n - 1);
  }
  console.log(temp);
  if (isPrimes(n)) return 1 + temp[n - 1];
  else return temp[n - 1];

  function isPrimes(n) {
    for (var i = 2; i < n - 1; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
};

countPrimes(10);
