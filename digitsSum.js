/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */

module.exports.digitsSum = function digitsSum(n) {
  n = Math.abs(n); // если отрицательное, делаем положительным
  let str = n.toString();
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    total += +str[i];
  }

  return total;
};
