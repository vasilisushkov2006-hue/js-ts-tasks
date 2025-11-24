/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty =  function hasProperty(obj, prop) {
  // typeof prop === 'string' гарантирует корректность проверки
  return prop in obj;
};


console.log(module.exports.hasProperty({ X: 1, Y: 1 }, "x")); // false
console.log(module.exports.hasProperty({ X: 10, property: 10 }, "property")); // true
console.log(module.exports.hasProperty({ key: "value" }, "toString")); // true
console.log(module.exports.hasProperty({ key: "value" }, "__proto__")); // true

