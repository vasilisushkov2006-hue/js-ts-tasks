/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */

module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  
  // эта функция пробрузует строку в число
  
  function toNumber(value) {
    if (typeof value === 'number') return value;

    // Убирем пробелы, чтобы корректно распознать значения
  
    let cleaned = String(value).replace(/\s+/g, '');
    return parseFloat(cleaned);
  }

  // создаем две переменные, присвоив аргументы функций для простой записи
  
  let a = toNumber(firstNumber);
  let b = toNumber(secondNumber);

  // вернем сумму переменных
  return a + b;
};
