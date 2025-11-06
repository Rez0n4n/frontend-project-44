#!/usr/bin/env node
const readLineSync = require("readline-sync");
const startAnswer = require("../src/cli.js");

const userName = startAnswer();
const brainGcd = (userName) => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const answerCheck = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer) {
      return true;
    }
    return false;
  };

  const nod = (num1, num2) => {
    while (num2 !== 0) {
      let result = num1 % num2;
      num1 = num2;
      num2 = result;
    }
    return num1;
  };

  console.log(`Find the greatest common divisor of given numbers.`);
  let i = 0;
  do {
    const num1 = getRandomIntInclusive(1, 100);
    const num2 = getRandomIntInclusive(1, 100);
    const correctAnswer = nod(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    let userAnswer = Number(readLineSync.question(`Your answer: `));
    const ok = answerCheck(userAnswer, correctAnswer);
    if (!ok) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    ++i;
    console.log(`Correct!`);
  } while (i < 3);
  console.log(`Congratulations,${userName}!`);
};

brainGcd(userName);
