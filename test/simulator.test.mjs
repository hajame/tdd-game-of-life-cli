import { expect } from "chai";
import { Pattern } from "../src/pattern.mjs";
import { Simulator } from "../src/simulator.mjs";

let simulator;

function getSimulator(x, y, pattern, iterations) {
  return new Simulator(x, y, new Pattern(pattern), iterations);
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
  describe("When a single cell is active", () => {
    it("it dies", () => {
      simulator = getSimulator(3, 3, "3b$3b$2bo!", 1);
      expect(simulator.simulate()).to.equal("x = 3, y = 3\n3b$3b$3b!");
    });
    it("it stays dead", () => {
      simulator = getSimulator(3, 3, "3b$3b$2bo!", 2);
      expect(simulator.simulate()).to.equal("x = 3, y = 3\n3b$3b$3b!");
    });
  });
  describe("Blinker", () => {
    it("it oscillates once", () => {
      simulator = getSimulator(3, 3, "3b$3o$3b!", 1);
      expect(simulator.simulate()).to.equal("x = 3, y = 3\nbob$bob$bob!");
    });
  });
});
