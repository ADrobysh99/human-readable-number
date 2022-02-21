   
module.exports = function toReadable (number) {
  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 10) {
      return ones[number];
  } else if (number > 10 && number < 20) {
      return `${teens[Math.floor(number - 10)]}`;
  } else if (number < 100 && number % 10 === 0) {
      return tens[number / 10];
  } else if (number > 20 && number < 100) {
      return `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`;
  } else if (number >=100 && number % 100 === 0) {
    return `${ones[number / 100]} hundred`;
  } else if (number >= 100 && number % 10 === 0) {
    return `${ones[Math.trunc(number / 100)]} hundred ${tens[((number % 100) / 10)]}`;
  } else if (number > 100 && Math.trunc(number % 100) < 10) {
    return `${ones[Math.trunc(number / 100)]} hundred ${ones[Math.trunc(number%10)]}`;
  } else if (number > 100 && Math.trunc(number % 100) < 20 && Math.trunc(number % 100) > 10) {
    return `${ones[Math.trunc(number / 100)]} hundred ${teens[Math.trunc(number%10)]}`;
  } else if (number > 100 && Math.trunc(number % 100) >= 20 && number % 10 !== 0) {
    return `${ones[Math.trunc(number / 100)]} hundred ${tens[Math.trunc((number%100)/10)]} ${ones[Math.trunc(number%10)]}`;
  } 
}