const EventEmitter = require("events");

const event = new EventEmitter();

event.on("myName", (statusCode, msg) => {
  console.log(
    `My name is Mahabur Rahman and status code is : ${statusCode} & message : ${msg}`
  );
});

// event.on("myName", () => {
//   console.log("My name is annur");
// });

// event.on("myName", () => {
//   console.log("same function call at the same time");
// });

event.emit("myName", 200, "ok");
