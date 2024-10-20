// for each function

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
document.write(txt);
function myFunction(value, index, array) {
  txt += value + "<br>";
}
// map function
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map((x) => x * 2);
document.write(numbers2);
//  flatmap
const myArrflatmap = [1, 2, 3, 4, 5, 6];
const newArrflat = myArrflatmap.flatMap((x) => [x, x * 10]);
document.write(newArrflat);
//  filter function
const filterar = [1, 23, 3, 34, 45, 6, 2, 56];
const filarray = filterar.filter((x) => x > 18);
document.write(filarray);
// reduce function
const red = [2, 24, 455, 56, 67];
reducea = red.reduce((x) => red + x);
document.write(reducea);
//  reduce function with initial values
const redinit = [1, 12, 13, 14, 15, 16, 17];
reduceinit = redinit.reduce((x) => redinit + x, 150);
document.write(redinit);
// reduce right same as reduce
// js array every returns the boolean values(true/false)
const everya = [2, 23, 24, 25, 26, 27];
const evearv = everya.every((x) => x > 18);
document.write(evearv);

// JavaScript Array some()
// The some() method checks if some array values pass a test.

// form method
// Return an array object from any object with a length property or any iterable object.

const froma = Array.from("Muthukumar");
document.write(froma);
// keys
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

document.write(text);
// entries method
const fruiten = ["Banana", "Orange", "Apple", "Mango"];
const f = fruiten.entries();

for (let x of f) {
  document.write(x + "<br>");
}
// with method
const withmo = ["Januar", "Februar", "Mar", "April"];
const mywithmonth = withmo.with(2, "January");

document.write(mywithmonth);
// spread method
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
document.write(year);
// Const Block Scope
// An array declared with const has Block Scope.

// An array declared in a block is not the same as an array declared outside the block:
