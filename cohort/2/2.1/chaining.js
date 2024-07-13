const promise = new Promise( (resolve,reject) => {
    resolve("react javascript node angular flutter swift kotlin")
})

promise.then( (data) => {
    const lst = data.split(" ");
    return lst;
}).then((data) => {
    console.log(data);
})