import { Board } from "./board.mjs";
import { Pattern } from "./pattern.mjs";

export class Simulator {
  x;
  y;
  iterations;
  board;

  constructor(x, y, pattern, iterations) {
    this.x = x;
    this.y = y;
    this.iterations = iterations;
    this.board = new Board(x, y, pattern);
  }

  simulate() {
    if (this._noneAlive()) {
      return `x = ${this.x}, y = ${this.y}\n${this.board.pattern.shortForm}`;
    }
  }

  _noneAlive() {
    return this.board.pattern.shortForm == "3b$3b$3b!";
  }
}
