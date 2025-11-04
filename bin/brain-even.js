#!/usr/bin/env node
const readLineSync = require("readline-sync");
const startAnswer = require("../src/cli.js");

const userName = startAnswer();
const brainEven = (userName) => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const checkingParity = (number) => {
    if (number % 2 === 0) {
      return "yes";
    }
    return "no";
  };
  const answerCheck = (userAnswer, correctAnswer) => {
    if (userAnswer.toLowerCase() === correctAnswer) {
      return true;
    }
    return false;
  };
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  let i = 0;
  do {
    const number = getRandomIntInclusive(1, 100);
    console.log(`Question: ${number}`);
    let userAnswer = readLineSync.question(`Your answer: `);
    let correctAnswer = checkingParity(number);
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
};

brainEven(userName);

module.exports = brainEven;
