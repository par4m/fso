
function greet( ) {

    console.log("hello world");
}
function greetAlien( ) {

    console.log("hello alien");
}

setTimeout(greetAlien, 3*1000);
setInterval(greet, 1*1000);
