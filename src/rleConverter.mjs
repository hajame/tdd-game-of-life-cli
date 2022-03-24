export class RleConverter {
  pattern;

  constructor(pattern) {
    this.pattern = pattern;
  }

  toLongForm() {
    let result = "";
    for (let a = 0; a < this.pattern.length; a++) {
      const char = this.pattern[a];
      if (char == "!") {
        result = result.concat(char);
        break;
      }
      if (["$", "b", "o"].includes(char)) {
        result = result.concat(char);
        continue;
      }
      for (let i = 0; i < parseInt(char); i++) {
        result = result.concat(this.pattern[a + 1]);
      }
      a++;
    }
    return result;
  }
}
