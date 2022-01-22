const validator = require("validator");

const showValidate = validator.isEmail("annur@123.com"); //=> true
console.log(showValidate ? "Successful" : "Failed");
