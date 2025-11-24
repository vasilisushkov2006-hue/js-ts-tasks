/**
 * Given k (number). Evaluate the expression: 4 * (2k - 1)
 * @param {number} k - number
 * @returns {number}
 */



module.exports.evalExpr = function evalExpr(k) {
// делаем значения
 let a = 2;
let b = -1;
let y = 4; 
  // Возращаем и вычисляем
  let result = y * (a * k - b);
  return result;
};
