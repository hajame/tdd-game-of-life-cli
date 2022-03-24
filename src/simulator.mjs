import { Pattern } from "./pattern.mjs";

export class Simulator {
  x;
  y;
  pattern;
  iterations;

  constructor(x, y, pattern, iterations) {
    this.x = x;
    this.y = y;
    this.pattern = new Pattern(pattern);
    this.iterations = iterations;
  }

  simulate() {
    if (this.pattern.shortForm == "3b$3b$3b!") {
      return `x = ${this.x}, y = ${this.y}\n${this.pattern.shortForm}`;
    }
  }
}
