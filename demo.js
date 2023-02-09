let arr = [1,2,3];
let arr1 = [4,5,6];
let concate = arr.concat(arr1);  //concatenate
console.log("The concatenate of two array is",concate);
let arr2 = ["bag","pencil","books","pen"];  //copywithin
console.log(arr2.copyWithin(2,1));
let arr3 = ["apple","orange","grape","cherry"];   //entries
let entry = arr3.entries();
for(let x of entry)
{
    console.log(x);
}
let rank = [ 1,2,3,5];  //every
console.log(rank.every(checkgradee));
function checkgradee(a)
{
    return a<=3;
}
let arr4 = ["hi","are","you","bye","go"]; //fill
console.log(arr4.fill("how",1,4));
console.log(rank.filter(checkgrade));  //filter
function checkgrade(a)
{
    return a<=3;
}
console.log(rank.find(checkgrade1));  //find
function checkgrade1(a)
{
    return a>3;
}
console.log(rank.findIndex(checkgrade2));  //findindex
function checkgrade2(a)
{
    return a>3;
}
rank.forEach(value => {      //foreach
    console.log(value);   
});
let n = "ROBERT";
let m = Array.from(n);     //Array,from
console.log(m);
console.log(rank.includes(2)); // includes
console.log(rank.indexOf(2));  //indexOf
console.log(Array.isArray(rank)); // Arrayy.isarray
console.log(rank.join());       //join
let key1 = rank.keys();     //keys
for(let a of key1)
{
    console.log(a);
}
let arr5 = ["hi","hey","are","hi"];  //lastindex
console.log(arr5.lastIndexOf("hi"));  
console.log(arr5.length); //length
let num = [4,9,16,25];  //map
let numbers = num.map(Math.sqrt);
console.log(numbers);
num.pop();  //pop
console.log(num);
num.push(25);
console.log(num);
const numbers1 = [175, 50, 25];
console.log(numbers1.reduce(myFunc))
function myFunc(a, b) {
    return a - b;
}
function myFunc1(a, b) {
    return a - b;
}
let b = numbers1.reduceRight(myFunc1)
console.log(b);
arr5.reverse();
console.log(arr5);
numbers1.shift();
console.log(numbers1);
let arr6 = ["apple","orange","cherry","banana","pine"];
let arr7 = arr6.slice(2,5);
console.log(arr7);
let ranks = [8,10,2,3,4,5,6];
function Checkrank(c) {
    return c>3;
}
console.log(ranks.some(Checkrank));
function check(m,n)
{
    return m-n;
}
ranks.sort(check);
console.log(ranks);
let animals = ["lion","tiger","horse","cheetah","dog","cat"];
animals.splice(2,1,"panther","elephant");
console.log(animals);
animals.unshift("deer");
console.log(animals);
let message = ["hi","how","are","you"];
let msg = message.toString();
console.log(msg);
let birds = ["eagle","pigeon"];
let brds=birds.valueOf();
console.log(brds);
