// const instructionString = `set a 1
// add a 2
// mul a a
// mod a 5
// snd a
// set a 0
// rcv a
// jgz a -1
// set a 1
// jgz a -2`;

const instructionString = `set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 316
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`;

const instructionSet = instructionString.split('\n');

const registries = [];
let lastSoundPlayed = 0;
let recoveredSound = 0;
let nextInstruction = 0;

const soundBoard = () => {
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
          recoveredSound = lastSoundPlayed;
          return;
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

  return true;
};

const result = soundBoard();

console.log('result', recoveredSound);
