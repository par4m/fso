const users = '{"name": "param", "age": 21}';

const user = JSON.parse(users)

console.log(user);
console.log(user["name"]);


const User = {
    name: "Param",
    gender: "male"

}

const final = JSON.stringify(User);

console.log(final);