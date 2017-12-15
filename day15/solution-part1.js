const factorA = 16807;
const factorB = 48271;
const factorResult = 2147483647;

const startingA = 618;
const startingB = 814;

const generator = (prevValue, factor) => {
  return (prevValue * factor) % factorResult;
};

const doTheyMatch = (valueA, valueB) => {
  const binaryValueA = valueA.toString(2);
  const binaryValueB = valueB.toString(2);
  const toConsiderA = binaryValueA.slice(-16);
  const toConsiderB = binaryValueB.slice(-16);
  // console.log('to match', toConsiderA, toConsiderB);

  return toConsiderA == toConsiderB;
};

numberOfTests = 40000000;

let lastAValue = startingA;
let lastBValue = startingB;
let numberOfMatches = 0;

for (let index = 0; index < numberOfTests; index++) {
  lastAValue = generator(lastAValue, factorA);
  lastBValue = generator(lastBValue, factorB);
  numberOfMatches += doTheyMatch(lastAValue, lastBValue) ? 1 : 0;
}

console.log('number of matches', numberOfMatches);
