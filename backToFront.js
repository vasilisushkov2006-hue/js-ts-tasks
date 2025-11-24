 /** Copy and paste defined amount 
 * of a string's symbols to the front 
 * and back of a string * 
 * @param {string} str 
 * * @param {number} symbolsCount 
 * * @returns {string} 
 * */

module.exports.backToFront = function backToFront(str, symbolsCount) {

  if (symbolsCount <= 0 || symbolsCount >= str.length) {
    return str;
  }

  const tail = str.slice(-symbolsCount);
  return tail + str + tail;
};
