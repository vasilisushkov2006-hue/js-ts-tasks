/**
 * Given number n and number k. Find the whole part and the remainder of the integer division of n by k.
 * Return a string formatted "wholePart remainder"
 * @param {number} n - number
 * @param {number} k - number
 * @returns {number}
 */

// Возвращает целую часть и остаток от деления n на k в виде строки

module.exports.divider = function divider(n, k) {
  let whole = Math.floor(n / k); 
  let rest = n % k;              
  return whole + ' ' + rest;
};

