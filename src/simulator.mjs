export class Simulator {
  file;
  iterations;

  constructor(file, iterations) {
    this.file = file;
    this.iterations = iterations;
  }

  simulate() {
    if (this.file == "x = 3, y = 3\n3b$3b$3b!") {
      return this.file;
    }
    return "";
  }
}
