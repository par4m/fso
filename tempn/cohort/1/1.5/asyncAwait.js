function paramsAsyncFunction() {
    let p = new Promise( function(resolve) {
        resolve('hi there')
    });
    return p;
}
async function main() {
    let value = await paramsAsyncFunction();
    console.log(value);
}

main();

