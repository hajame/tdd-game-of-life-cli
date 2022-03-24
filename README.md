# TDD Game of Life CLI

Practising TDD by creating a CLI version of Conway's Game of Life.

## Usage instructions

Requires a recent version (12+) of `node.js`. Install dependencies with `npm install`

The input files are in [RLE format](https://www.conwaylife.com/wiki/Run_Length_Encoded). `example.rle` contains a [Blinker](https://conwaylife.com/wiki/Blinker).

In project root,

```bash
# run the simulation for 3 iterations
npm run gol example.rle 3
```

The output is an RLE format print of the result of the simulation. The result is printed to the console.
