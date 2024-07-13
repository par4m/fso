import url from "url";

const urlString = "https://google.com/search?q=hello+world";

// URL Object

const urlObj = new URL(urlString);

console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url (special variable)
console.log(import.meta.url);

// fileURLToPath()

console.log(url.fileURLToPath(import.meta.url));


// 
console.log(urlObj.search);