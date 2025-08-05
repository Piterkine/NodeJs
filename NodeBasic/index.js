console.log("Very important js code");

//& This is use for Common js module(C.js).

// d = 20;  //^ This give us error when it run on ES module(Mjs) because it run on strict mode,but in case of cjs this can not  be return any error..

let c = 20;

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = { calculateSum, c };

//& This is use for ES module(E.Js).

// export function calculateSum(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }

// export let c = 20;
