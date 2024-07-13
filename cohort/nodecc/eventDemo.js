import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("hello  " + name);
}

function goodbyeHandler(name) {
  console.log("Goodbye " + name);
}

// Register event listeners

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit events
myEmitter.emit("greet", "param");
myEmitter.emit("goodbye", "param");

// error event
myEmitter.on("error", (err) => {
  console.log("An Error Occured: ", err);
});

// Simulate Error
myEmitter.emit('error', new Error('Something went wrong'))