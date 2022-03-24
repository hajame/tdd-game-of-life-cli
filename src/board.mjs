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
    let longFormPattern = this.pattern.longForm;

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

  hasAliveCell() {
    for (var h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        if (this.board[h][w] == "o") {
          return true;
        }
      }
    }
    return false;
  }

  updateCells() {
    let nextBoard = this._emptyBoard();
    for (var h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        if (this.board[h][w] == "b") {
          nextBoard[h][w] = this._canBeBorn(w, h) ? "o" : "b";
        }
        if (this.board[h][w] == "o") {
          nextBoard[h][w] = this._canLive(w, h) ? "o" : "b";
        }
      }
    }
    this.board = nextBoard;
    this.pattern = this.toPattern();
  }

  toPattern() {
    let result = "";
    for (var h = 0; h < this.height; h++) {
      result = result.concat(this.board[h].join("")).concat("$");
    }
    result = result
      .trim()
      .substring(0, result.length - 1)
      .concat("!");

    return new Pattern(result);
  }

  _canBeBorn(x, y) {
    let leftLimit = x > 0 ? x - 1 : 0;
    let rightLimit = (x = this.width - 1 ? this.width : x + 1);
    let topLimit = y > 0 ? y - 1 : 0;
    let bottomLimit = (y = this.height - 1 ? this.height : y + 1);

    let neighbours = 0;

    for (var h = topLimit; h < bottomLimit; h++) {
      for (let w = leftLimit; w < rightLimit; w++) {
        if (h == y && w == x) {
          continue;
        }
        if (this.board[h][w] == "o") {
          neighbours++;
        }
      }
    }
    return neighbours == 3;
  }

  _canLive(x, y) {
    let leftLimit = x > 0 ? x - 1 : 0;
    let rightLimit = (x = this.width - 1 ? this.width : x + 1);
    let topLimit = y > 0 ? y - 1 : 0;
    let bottomLimit = (y = this.height - 1 ? this.height : y + 1);

    let neighbours = 0;

    for (var h = topLimit; h < bottomLimit; h++) {
      for (let w = leftLimit; w < rightLimit; w++) {
        if (h == y && w == x) {
          continue;
        }
        if (this.board[h][w] == "o") {
          neighbours++;
        }
      }
    }
    return neighbours == 2 || neighbours == 3;
  }

  _emptyBoard() {
    let result = new Array(this.height);
    for (var h = 0; h < this.height; h++) {
      result[h] = new Array(this.width);
    }
    return result;
  }
}
