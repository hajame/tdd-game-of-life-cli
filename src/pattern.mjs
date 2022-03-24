export class Pattern {
  pattern;
  shortForm;
  longForm;

  constructor(pattern) {
    this.pattern = pattern;
    this.longForm = this._toLongForm();
    this.shortForm = this._toShortForm();
  }

  _toLongForm() {
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

  _toShortForm() {
    let result = "";
    for (let a = 0; a < this.longForm.length; a++) {
      const char = this.longForm[a];
      if (["!", "$"].includes(char)) {
        result = result.concat(char);
        continue;
      }
      if (["b", "o"].includes(char)) {
        let runCount = 1;
        for (let i = a + 1; i < this.longForm.length; i++) {
          if (this.longForm[i] == char) {
            runCount++;
            a++;
          } else {
            break;
          }
        }
        runCount = runCount > 1 ? runCount : "";
        result = result.concat(runCount + char);
      }
    }
    //result = this._addLineBreaks(result, 70);
    return result;
  }

  // _addLineBreaks(string, charLimit) {
  //   return string.match(`/.{1,${charLimit}}/g`).join("\n");
  // }
}
