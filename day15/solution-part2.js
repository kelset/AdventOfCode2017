const factorA = 16807;
const factorB = 48271;
const factorResult = 2147483647;

// const startingA = 65;
// const startingB = 8921;
const startingA = 618;
const startingB = 814;

const dividendA = 4;
const dividendB = 8;

const generator = (prevValue, factor, dividend) => {
  const generatedValue = (prevValue * factor) % factorResult;
  if (generatedValue % dividend === 0) {
    return (prevValue * factor) % factorResult;
  } else {
    return generator(generatedValue, factor, dividend);
  }
};

const doTheyMatch = (valueA, valueB) => {
  const binaryValueA = valueA.toString(2);
  const binaryValueB = valueB.toString(2);
  const toConsiderA = binaryValueA.slice(-16);
  const toConsiderB = binaryValueB.slice(-16);

  return toConsiderA == toConsiderB;
};

// numberOfTests = 1057;
numberOfTests = 5000000;

let lastAValue = startingA;
let lastBValue = startingB;
let numberOfMatches = 0;

const t0 = new Date().getTime();
for (let index = 0; index < numberOfTests; index++) {
  lastAValue = generator(lastAValue, factorA, dividendA);
  lastBValue = generator(lastBValue, factorB, dividendB);
  //   console.log('to match', lastAValue, lastBValue);

  numberOfMatches += doTheyMatch(lastAValue, lastBValue) ? 1 : 0;
}
const t1 = new Date().getTime();
console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');

console.log('number of matches', numberOfMatches);
