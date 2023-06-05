const validator = require('validator');

function isEmail(email) {
  return validator.isEmail(email);
}

const email1 = "test@test.com";
const email2 = "abcDE123";

console.log(isEmail(email1)); // true
console.log(isEmail(email2)); // false
