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
      return this._getOutput(this.board);
    }
    for (let i = 0; i < this.iterations; i++) {
      this.board.updateCells();
    }
    return this._getOutput(this.board);
  }

  _getOutput(board) {
    return `x = ${this.x}, y = ${this.y}\n${board.toPattern().shortForm}`;
  }

  _noneAlive() {
    return !this.board.hasAliveCell();
  }
}
