const items = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];

let sumOfDif = 0;

items.forEach(row => {
  const maxValue = Math.max(...row);
  const minValue = Math.min(...row);

  sumOfDif += maxValue - minValue;
});

console.log(sumOfDif);
