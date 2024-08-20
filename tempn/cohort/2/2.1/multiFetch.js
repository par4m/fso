const p1 = fetch("URL1");
const p2 = fetch("URL2");


Promise.all([p1,p2]).then((data) => {
    const key = data[0] + data[1];
    fetch(`URL3&key=${key}`).then((data3) => {
        console.log(data3);
    })
})