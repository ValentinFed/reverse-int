module.exports = function reverse (n) {
  const number = n.toString().split('').reverse().join('');
  return  Math.abs(parseInt(number));
}
