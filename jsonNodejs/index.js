const fs = require("fs");

const data = {
  country: "Bangladesh",
  city: "Dhaka",
  lang: "Bangla",

  district: ["jessore", "magura", "kustia", "barisal"],
  thana: [
    { code: 3214325, name: "thana 1", active: true },
    { code: 243.54, name: "thana 2", active: false },
    { code: 543, name: "thana 13", active: true },
  ],
};

// covert obj to json 👍

const convertToJson = JSON.stringify(data);

// create a new file jsonData.json
// fs.writeFile("jsonData.json", convertToJson, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File transfer successfully done");
//   }
// });
// console.log(convertToJson);

// convert json to original js object 👍

fs.readFile("jsonData.json", "utf-8", (err, data) => {
  if (!err) {
    //   console.log(data);
    const originalData = JSON.parse(data);
    console.log(originalData);
  } else {
    console.log(err.message);
  }
});

// console.log(data.zipCode);

// const jsonData = JSON.stringify(data);

// const parseData = JSON.parse(jsonData);
// console.log(parseData.thana[0].code);
