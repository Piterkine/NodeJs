// const obj = require("./index");
// const { calculateSum, c } = require("./index"); //^ For common js module.
// const { mul } = require("./script");
// import { c, calculateSum } from "./index.js"; //& For EJS Module.
// & Export a file module

const {calculateSum,mul } = require('./math') //^ Come from math.js
var name = "Shashank Shukla";

let a = 10;
let b = 20;

// console.log(a + b + obj["c"]);
console.log(a + b );

// obj.calculateSum(12, 12);
calculateSum(50, 25);
mul(20, 10);
