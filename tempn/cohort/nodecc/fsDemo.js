// import fs from "fs";
import fs from "fs/promises";

// readFile() - callback

// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // synchronous (blocking)
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

// readFile() - Promise .then()

fs.readFile("./test.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// readFile - async await version
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {}
};

readFile();

// Write File
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello Im writing to this");
    console.log("written");
  } catch (err) {
    console.log(err);
  }
};

writeFile();
readFile();

// Apend

const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended");
    console.log("Appened");
  } catch (err) {
    console.log(err);
  }
};

appendFile();
readFile();


