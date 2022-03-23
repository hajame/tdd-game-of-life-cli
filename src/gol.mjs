import fs from "fs";
import { Simulator } from "./simulator.mjs";

let file;
let iterations = process.argv[3];

try {
  file = fs.readFileSync(process.argv[2], "ascii").trim();
} catch (err) {
  console.log(err);
}

let simulator = new Simulator(file, iterations);
console.log(simulator.simulate());
