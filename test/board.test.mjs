import { expect } from "chai";
import { Board } from "../src/board.mjs";

let board;

function getBoard(pattern) {
  return new Board(pattern);
}

describe("Board", () => {
  describe("Board with all empty values", () => {
    beforeEach(() => {
      board = getBoard("3b$3b$3b!");
    });
    it("board has correct height", () => {
      expect(board.length).to.equal(3);
    });
    it("board has correct width", () => {
      expect(board[0].length).to.equal(3);
    });
  });
});
