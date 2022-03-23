export class Board {
  width;
  height;
  board;

  constructor(width, height, pattern) {
    this.width = width;
    this.height = height;
    this.board = this.parseBoard(pattern);
  }

  parseBoard(pattern) {
    let result = this._emptyBoard();
    let longFormPattern = this.toLongForm(pattern);

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

  toLongForm(pattern) {
    let result = "";
    for (let a = 0; a < pattern.length; a++) {
      const element = pattern[a];
    }
    for (let a = 0; a < pattern.length; a++) {
      const char = pattern[a];
      if (char == "!") {
        result = result.concat(char);
        break;
      }
      if (["$", "b", "o"].includes(char)) {
        result = result.concat(char);
        continue;
      }
      for (let i = 0; i < parseInt(char); i++) {
        result = result.concat(pattern[a + 1]);
      }
      a++;
    }

    return result;
  }
}
