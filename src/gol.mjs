import fs from "fs";

let file;
let iterations = process.argv[3];

try {
  file = fs.readFileSync(process.argv[2], "ascii").trim();
} catch (err) {
  console.log(err);
}

console.log(file, iterations);
