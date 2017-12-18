const instructions = `snd 1
snd 2
snd p
rcv a
rcv b
rcv c
rcv d`;

const deadlockCounter = 0;

const soundBoard = (instructionString, registries) => {
  const instructionSet = instructionString.split('\n');

  let lastSoundPlayed = 0;
  let recoveredSound = 0;
  let nextInstruction = 0;
  while (nextInstruction < instructionSet.length && nextInstruction >= 0) {
    let instIncrement = 1;
    const instruction = instructionSet[nextInstruction];
    const instructionElements = instruction.split(' ');

    const parsed = parseInt(instructionElements[2], 10);

    let secondValue = 0;

    if (isNaN(parseInt(instructionElements[2], 10))) {
      secondValue = registries[instructionElements[2]];
    } else {
      secondValue = parseInt(instructionElements[2], 10) || 0;
    }

    switch (instructionElements[0]) {
      case 'snd':
        lastSoundPlayed = registries[instructionElements[1]]
          ? registries[instructionElements[1]]
          : 0;
        break;
      case 'set':
        registries[instructionElements[1]] = secondValue;
        break;
      case 'add':
        registries[instructionElements[1]] += secondValue;
        break;
      case 'mul':
        registries[instructionElements[1]] *= secondValue;
        break;
      case 'mod':
        registries[instructionElements[1]] %= secondValue;
        break;
      case 'rcv':
        if (registries[instructionElements[1]] > 0) {
          return lastSoundPlayed;
        }
        break;
      case 'jgz':
        instIncrement =
          registries[instructionElements[1]] > 0 ? secondValue : 1;
        break;
      default:
        break;
    }

    nextInstruction += instIncrement;
  }

  return 0;
};

const messageQueueA = []; // from prog 0 to prog 1
const messageQueueB = []; // from prog 1 to prog 0

const registries0 = [];
registries0['p'] = 0;

const registries1 = [];
registries1['p'] = 1;

const recoveredSound = soundBoard(instructions);

console.log('result', recoveredSound);
