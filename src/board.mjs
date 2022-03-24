import { Pattern } from "./pattern.mjs";

export class Board {
  width;
  height;
  board;
  pattern;

  constructor(width, height, pattern) {
    this.width = width;
    this.height = height;
    this.pattern = new Pattern(pattern);
    this.board = this.parseBoard();
  }

  parseBoard() {
    let result = this._emptyBoard();
    let longFormPattern = this.pattern.toLongForm();

    let y = 0;
    let x = 0;
    for (const char of longFormPattern) {
      if (char == "$") {
        y++;
        x = 0;
        continue;
      }
      if (char == "!") {
        break;
      }
      result[y][x] = char;
      x++;
    }
    return result;
  }

  _emptyBoard() {
    let result = new Array(this.height);
    for (var h = 0; h < this.height; h++) {
      result[h] = new Array(this.width);
    }
    return result;
  }
}
