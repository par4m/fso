function calculateArithmetic(a,b,type) {
        return type(a, b)
}

function sum(a,b) {
    return a+b;
}
function minus(a,b) {
    return a-b;
}

const ans = calculateArithmetic(1  , 2, sum);
const ans2 = calculateArithmetic(1  , 2, minus);
console.log(ans + " " + ans2);