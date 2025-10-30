/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let minSalary = firstSalary;
  let maxSalary = firstSalary;
return (maxSalary - minSalary);
  if (secondSalary > maxSalary) {
    maxSalary = secondSalary;
  } else if (thirdSalary > maxSalary) {
    maxSalary = thirdSalary;
  } else if (secondSalary < minSalary) {
    minSalary = secondSalary;
  } else if (thirdSalary < minSalary) {
    minSalary = thirdSalary;
  }
};
