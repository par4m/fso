const currentDate = new Date();

console.log(currentDate);
console.log(currentDate.getDate());
console.log(currentDate.getYear());
currentDate.setFullYear(2022);


// epoch
const beforeDate = currentDate.getTime();

function abc() {
    setTimeout(() => console.log("New"), 1000);
}
abc();
const afterDate = currentDate.getTime();

console.log(afterDate - beforeDate);