const sampleObject = {
    name: "key",
    value: "val",
};
console.log(Object.keys(sampleObject));
console.log(Object.values(sampleObject));
console.log(Object.entries(sampleObject));
console.log(Object.hasOwnProperty("name"));

let newObj = Object.assign({}, sampleObject, {"newProp": "newVal"});
console.log(newObj);
