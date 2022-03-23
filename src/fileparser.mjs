export class FileParser {
  file;
  x;
  y;
  pattern;

  constructor(file) {
    this.file = file;
    this.pattern = "";
  }

  parse() {
    let rows = this.file.split("\n");
    let resolutionRow = rows.filter((row) => row[0] == "x")[0];
    this.x = parseInt(resolutionRow.split(",")[0].trim().split(" ")[2].trim());
    this.y = parseInt(resolutionRow.split(",")[1].trim().split(" ")[2].trim());
    for (let i = rows.indexOf(resolutionRow) + 1; i < rows.length; i++) {
      this.pattern = this.pattern.concat(rows[i]);
    }
  }
}
