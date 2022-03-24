import { expect } from "chai";
import { RleConverter } from "../src/rleConverter.mjs";

let rleConverter;

function getRleConverter(pattern) {
  return new RleConverter(pattern);
}

describe("RleConverter", () => {
  describe("Convert to long form", () => {
    beforeEach(() => {
      rleConverter = getRleConverter("3b$3b$3b!");
    });
    it("output is correct", () => {
      expect(rleConverter.toLongForm()).to.equal("bbb$bbb$bbb!");
    });
  });
});
