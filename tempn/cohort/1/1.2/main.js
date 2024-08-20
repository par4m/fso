let firstName = 'param';

let age = 5;


let isMarried = true;


console.log("this persons name is " + firstName + " and their age is " + age);

if(isMarried) {
    console.log(firstName + " is married");
}
else {

    console.log(firstName + " is NOT married");
}

let ans = 0;
for (let i = 0; i < 100 ; i++) {
    ans+=i;
}
console.log(ans);


const personArray = ["param","arora"];


// objects
const user1 = {
    firsName : "param",
    gender: "male"
}

console.log(user1["firsName"]);
console.log(user1["gender"]);


// array of objects

const allUsers = [
   {
    firsName : "param",
    gender: "male"
},{
    firsName : "arav",
    gender: "male"
},{
    firsName : "uday",
    gender: "female"
},
];

for (let i = 0; i < allUsers.length; i++) {
    if(allUsers[i].gender == "male") {
        console.log(allUsers[i].firsName);
    }
    
}


// functions

function sum(a,b, func) 
{
    func(a+b);

}


function xyz(data) {
    console.log(data);
    
}


const answ = sum(1, 2, xyz);

console.log(answ);