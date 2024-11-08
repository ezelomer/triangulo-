const caracter = "#";
const count = 8;

function padRow(rowNumber, rowCount) {
  const spaces = " ".repeat(rowCount - rowNumber);
  const chars = caracter.repeat(2 * rowNumber - 1);
  return spaces + chars + spaces;
}

const rows = [];
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

let result = rows.join("\n");
console.log(result);

