import { expect } from "chai";
import { FileParser } from "../src/fileparser.mjs";

let fileparser;

function getFileParser(x, y, pattern) {
  return new FileParser(`x = ${x}, y = ${y}\n${pattern}`);
}

describe("Fileparser", () => {
  describe("Parse file with all empty values", () => {
    beforeEach(() => {
      fileparser = getFileParser(3, 3, "3b$3b$3b!");
      fileparser.parse();
    });
    it("it returns the same file", () => {
      expect(fileparser.getY()).to.equal(3);
    });
  });
});
