module.exports = function(format) {
  let [formatString, ...args] = [...arguments];

  return formatString.replace(/{(\d+)}/g, (match, number) => {
    return typeof args[number] !== 'undefined' ? args[number] : match;
  });
};
