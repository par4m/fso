
let firstName = "param param param";

console.log(firstName.length);
console.log(firstName.indexOf("aram"));
console.log(firstName.indexOf("abcd"));
console.log(firstName.lastIndexOf("abcd"));
console.log(firstName.slice(0,5));

console.log(firstName.replaceAll("param", "arora"));

let value =  "hi this is a sentence";
const words = value.split(" ");

console.log(words); // array



 value =  "   hi this is a sentence    ";

console.log(value.trim());


console.log(parseInt("42abc"));