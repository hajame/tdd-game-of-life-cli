import { expect } from "chai";
import { Simulator } from "../src/simulator.mjs";

let simulator;

function getSimulator(x, y, pattern, iterations) {
  return new Simulator(x, y, pattern, iterations);
}

describe("Simulation test", () => {
  describe("When no cells are active", () => {
    beforeEach(() => {
      simulator = getSimulator(3, 3, "3b$3b$3b!", 2);
    });
    it("it returns the same file", () => {
      expect(simulator.simulate()).to.equal("x = 3, y = 3\n3b$3b$3b!");
    });
  });
  xdescribe("When a single cell is active", () => {
    beforeEach(() => {
      simulator = getSimulator(3, 3, "3b$3b$2bo!", 2);
    });
    it("all cells are dead", () => {
      expect(simulator.simulate()).to.equal("x = 3, y = 3\n3b$3b$3b!");
    });
  });
});
