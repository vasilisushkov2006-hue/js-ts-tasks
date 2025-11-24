/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub =
function longestCommonSubstring(str1, str2) {
  let longest = "";
  const dp = Array(str1.length + 1)
    .fill(null)
    .map(() => Array(str2.length + 1).fill(0));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > longest.length) {
          longest = str1.slice(i - dp[i][j], i);
        }
      }
    }
  }

  return longest;
};
console.log(longestCommonSubstring);