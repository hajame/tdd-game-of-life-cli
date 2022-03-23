import { expect } from "chai";
import { Simulator } from "../src/simulator.mjs";

let simulator;

describe("Simulation test", () => {
  describe("When no cells are active", () => {
    beforeEach(() => {
      simulator = new Simulator("x = 3, y = 3\n3b$3b$3b!", 2);
    });
    it("it returns the same file", () => {
      expect(simulator.simulate()).to.equal("x = 3, y = 3\n3b$3b$3b!");
    });
  });
});
