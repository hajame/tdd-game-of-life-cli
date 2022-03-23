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
    it("y is correct", () => {
      expect(fileparser.y).to.equal(3);
    });
    it("x is correct", () => {
      expect(fileparser.x).to.equal(3);
    });
    it("pattern is correct", () => {
      expect(fileparser.pattern).to.equal("3b$3b$3b!");
    });
  });
});
