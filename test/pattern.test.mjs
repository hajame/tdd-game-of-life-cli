import { expect } from "chai";
import { Pattern } from "../src/pattern.mjs";

let pattern;

function getPattern(pattern) {
  return new Pattern(pattern);
}

describe("Pattern", () => {
  describe("Convert to long form", () => {
    beforeEach(() => {
      pattern = getPattern("3b$3b$3b!");
    });
    it("output is correct", () => {
      expect(pattern.longForm).to.equal("bbb$bbb$bbb!");
    });
  });
  describe("Convert to short form", () => {
    it("output is correct", () => {
      pattern = getPattern("bbb$bbb$bbb!");
      expect(pattern.shortForm).to.equal("3b$3b$3b!");
    });
    it("ignore run count if just one", () => {
      pattern = getPattern("bbo$ooo$oob!");
      expect(pattern.shortForm).to.equal("2bo$3o$2ob!");
    });
    it("over 70 chars gets split to two lines", () => {
      pattern = getPattern(
        "bobobobobo$bobobobobo$bobobobobo$bobobobobo$bobobobobo$bobobobobo$bobobobobo$bobobobobo!"
      );
      expect(pattern.shortForm).to.equal(
        "bobobobobo$bobobobobo$bobobobobo$bobobobobo$bobobobobo$bobobobobo$bobo\nbobobo$bobobobobo!"
      );
    });
  });
  describe("Convert to long form and back to short form", () => {
    it("funny short form, output is correct", () => {
      pattern = getPattern("3b$b2b$1obb!");
      let longFormPattern = getPattern(pattern.longForm);
      expect(longFormPattern.shortForm).to.equal("3b$3b$o2b!");
    });
    it("correct short form, output is correct", () => {
      pattern = getPattern("3b$3b$o2b!");
      let longFormPattern = getPattern(pattern.longForm);
      expect(longFormPattern.shortForm).to.equal("3b$3b$o2b!");
    });
  });
});
