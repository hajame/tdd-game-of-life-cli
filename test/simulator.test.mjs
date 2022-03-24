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
    it("3x3 Blinker oscillates once", () => {
      simulator = getSimulator(3, 3, "3b$3o$3b!", 1);
      expect(simulator.simulate()).to.equal("x = 3, y = 3\nbob$bob$bob!");
    });
    it("3x3 Blinker oscillates twice", () => {
      simulator = getSimulator(3, 3, "3b$3o$3b!", 2);
      expect(simulator.simulate()).to.equal("x = 3, y = 3\n3b$3o$3b!");
    });
    it("3x3 Blinker in 5x5 grid oscillates twice", () => {
      simulator = getSimulator(5, 5, "5b$5b$b3ob$5b$5b!", 2);
      expect(simulator.simulate()).to.equal("x = 5, y = 5\n5b$5b$b3ob$5b$5b!");
    });
  });
  describe("Block", () => {
    it("4x4 Block stays", () => {
      simulator = getSimulator(4, 4, "4b$b2ob$b2ob$4b!", 3);
      expect(simulator.simulate()).to.equal("x = 4, y = 4\n4b$b2ob$b2ob$4b!");
    });
  });
  describe("Glider", () => {
    it("5x5 Glider stage 1, 4 steps, moves one row down and one accross", () => {
      simulator = getSimulator(5, 5, "5b$2bo2b$3bob$b3ob$5b!", 4);
      expect(simulator.simulate()).to.equal(
        "x = 5, y = 5\n5b$5b$3bob$4bo$2b3o!"
      );
    });

    it("5x5 Glider stage 2, 1 steps", () => {
      simulator = getSimulator(5, 5, "5b$bobob$2b2ob$2bo2b$5b!", 1);
      expect(simulator.simulate()).to.equal(
        "x = 5, y = 5\n5b$3bob$bobob$2b2ob$5b!"
      );
    });
    it("5x5 Glider stage 2, 3 steps", () => {
      simulator = getSimulator(5, 5, "5b$bobob$2b2ob$2bo2b$5b!", 3);
      expect(simulator.simulate()).to.equal(
        "x = 5, y = 5\n5b$3bob$4bo$2b3o$5b!"
      );
    });
  });
});
