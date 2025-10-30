/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  // создам константу, Формула объема конуса: (1/3) * π * r² * h
  const volume = (Math.PI * r * r * h) / 3;

  // и округлимм до двух знаков
  return +volume.toFixed(2);
};