import fs from "fs";
import { Simulator } from "./simulator.mjs";
import { FileParser } from "./fileparser.mjs";
import { Pattern } from "./pattern.mjs";

let file;
let iterations = process.argv[3];

try {
  file = fs.readFileSync(process.argv[2], "ascii").trim();
} catch (err) {
  console.log(err);
}

let parser = new FileParser(file);
parser.parse();

let simulator = new Simulator(
  parser.x,
  parser.y,
  new Pattern(parser.pattern),
  iterations
);

console.log(simulator.simulate());

function outputFile() {
  fs.writeFile("output.rle", simulator.simulate(), "utf8", function (err) {
    if (err) return console.log(err);
  });
}
