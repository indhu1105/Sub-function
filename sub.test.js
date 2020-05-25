let indhu = require("./node_modules/indhu-test/indhu");
let sub = require("./sub");

let result = sub(10, 4);
let expected = 6;

indhu.test(result).toBeEqualTo(expected);

/* check the always positive case*/
result = sub(8, 4);
expected = 4;

indhu.test(result).toBeEqualTo(expected);
indhu.test(result).toBePositive(expected);

/*Fail case*/
result = sub(5, 4);
expected = 2;

indhu.test(result).toBeEqualTo(expected);
