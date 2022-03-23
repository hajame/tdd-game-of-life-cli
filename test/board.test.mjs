import { expect } from "chai";
import { Board } from "../src/board.mjs";

let board;

function getBoard(x, y, pattern) {
  return new Board(x, y, pattern);
}

describe("Board", () => {
  describe("Board with all empty values", () => {
    beforeEach(() => {
      board = getBoard(3, 3, "bbb$bbb$bbb!");
    });
    it("board has correct height", () => {
      expect(board.height).to.equal(3);
    });
    it("board has correct width", () => {
      expect(board.width).to.equal(3);
    });
    it("board matrix has correct height", () => {
      expect(board.board.length).to.equal(3);
    });
    it("board matrix has correct width", () => {
      expect(board.board[0].length).to.equal(3);
    });
  });
  describe("Parse short form values", () => {
    beforeEach(() => {
      board = getBoard(3, 3, "3b$3b$3b!");
    });
    it("board matrix has correct height", () => {
      expect(board.board.length).to.equal(3);
    });
    it("board correct rows", () => {
      expect(board.board[0].join("")).to.equal("bbb");
    });
  });
});
