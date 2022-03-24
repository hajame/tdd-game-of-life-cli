import { expect } from "chai";
import { Pattern } from "../src/pattern.mjs";

let pattern;

function getPattern(pattern) {
  return new Pattern(pattern);
}

describe("RleConverter", () => {
  describe("Convert to long form", () => {
    beforeEach(() => {
      pattern = getPattern("3b$3b$3b!");
    });
    it("output is correct", () => {
      expect(pattern.toLongForm()).to.equal("bbb$bbb$bbb!");
    });
  });
  describe("Convert to short form", () => {
    beforeEach(() => {
      pattern = getPattern("bbb$bbb$bbb!");
    });
    it("output is correct", () => {
      expect(pattern.toShortForm()).to.equal("3b$3b$3b!");
    });
  });
});
