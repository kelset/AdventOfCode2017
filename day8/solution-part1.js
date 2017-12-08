// example:
// b inc 5 if a > 1
// a inc 1 if b < 5
// c dec -10 if a >= 1
// c inc -20 if c == 10

const instructionSet = [
  'b inc 5 if a > 1',
  'a inc 1 if b < 5',
  'c dec -10 if a >= 1'
];

const findMaxValueInRegistry = () => {
  const registrySet = []; // {'a': 0}

  registrySet.push({ label: 'a', value: 1 });
  registrySet.push({ label: 'b', value: 2 });

  console.log('registry', registrySet);

  // need to split the instruction set in single commands

  const registryValues = registrySet.map(registry => {
    return registry.value;
  });

  return Math.max(...registryValues);
};

const result = findMaxValueInRegistry(instructionSet);

console.log('this is the max value', result);
