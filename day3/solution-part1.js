const puzzleInput = 23;

const whichOrbit = pointToFind => {
  let orbit = 0;
  let valueOfDistance = 0;
  if (pointToFind === 1) {
    return { orbit, valueOfDistance };
  }
  for (let i = 1; ; i = i + 2) {
    console.log([Math.pow(i - 2, 2) + 1, pointToFind, Math.pow(i, 2), orbit]);
    if (pointToFind > Math.pow(i - 2, 2) + 1 && pointToFind < Math.pow(i, 2)) {
      const test = Math.pow(i, 2) % pointToFind;
      if (test < orbit) {
        valueOfDistance = test + orbit;
      } else {
        valueOfDistance = test;
      }
      break;
    }
    orbit++;
  }
  return { orbit, valueOfDistance };
};

const { orbit, valueOfDistance } = whichOrbit(puzzleInput);

console.log("it's in the orbit", { orbit, valueOfDistance });
