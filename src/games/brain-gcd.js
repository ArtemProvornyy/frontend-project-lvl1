import {
  genRandomInt,
  makeQuestion,
  makeGame,
} from '..';

const getGCD = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;

  const iter = (devider) => {
    if (a % devider === 0 && b % devider === 0) {
      return devider;
    }

    return iter(devider - 1);
  };

  const smallerNumber = a < b ? a : b;

  return iter(smallerNumber);
};

const getGameData = () => {
  const maxRandomInt = 100;

  const firstNum = genRandomInt(maxRandomInt);
  const secondNum = genRandomInt(maxRandomInt);

  const correctAnswer = getGCD(firstNum, secondNum);
  const questionContent = `${firstNum} ${secondNum}`;

  return makeQuestion(questionContent, correctAnswer);
};

export default () => makeGame(getGameData);
