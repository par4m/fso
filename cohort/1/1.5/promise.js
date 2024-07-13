const fs = require("fs");

// filesystem module
function paramsReadFile() {
    console.log("params readfile");
  return new Promise(function(resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
        console.log("before resolve");
        resolve(data);
    });
  });
}


function onDone(data) {
    console.log("Inside resolved");
    console.log(data);
    console.log("after resolved");
}

const prms = paramsReadFile();
// console.log(prms);
prms.then(onDone)

console.log(" after function call");


var d = new Promise(function(onDone) {

    setTimeout( function() {

    onDone("foo");
    }, 1000)

});

function callback( ) {
    console.log(d);

}


console.log(d);
d.then(callback)


