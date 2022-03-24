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
    it("output is correct", () => {
      pattern = getPattern("bbb$bbb$bbb!");
      expect(pattern.toShortForm()).to.equal("3b$3b$3b!");
    });
    it("ignore run count if just one", () => {
      pattern = getPattern("bbo$ooo$oob!");
      expect(pattern.toShortForm()).to.equal("2bo$3o$2ob!");
    });
  });
  describe("Convert to long form and back to short form", () => {
    it("funny short form, output is correct", () => {
      pattern = getPattern("3b$b2b$1obb!");
      let longFormPattern = getPattern(pattern.toLongForm());
      expect(longFormPattern.toShortForm()).to.equal("3b$3b$o2b!");
    });
    it("correct short form, output is correct", () => {
      pattern = getPattern("3b$3b$o2b!");
      let longFormPattern = getPattern(pattern.toLongForm());
      expect(longFormPattern.toShortForm()).to.equal("3b$3b$o2b!");
    });
  });
});
