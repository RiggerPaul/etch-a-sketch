
let numberOfRows = 16;
let numberOfCols = 16;

const container = document.querySelector('#container');
let cell;
let rows;
const row = "r";
const col = "c";

  for (let r = 1; r <= numberOfRows; r++) {
      rows = document.createElement('div');
      rows.classList.add(row.concat(r));
      container.appendChild(rows);
    for (let c = 1; c <= numberOfCols; c++){
      cell = row.concat(r, col, c);
      console.log(cell);
      cell = document.createElement('div');
      cell.classList.add(row.concat(r, col, c));
      container.appendChild(cell);
    };
  };