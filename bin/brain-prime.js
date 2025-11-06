#!/usr/bin/env node
const readLineSync = require("readline-sync");
const startAnswer = require("../src/cli.js");

const userName = startAnswer();
const brainPrime = (userName) => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const answerCheck = (userAnswer, correctAnswer) => {
    if (userAnswer.toLowerCase() === correctAnswer) {
      return true;
    }
    return false;
  };

  const primeCheck = (number) => {
    if (number % 2 === 0) {
      return "no";
    }
    let result = "";

    for (let i = 3; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        result = "no";
      } else {
        result = "yes";
      }
    }
    return result;
  };

  console.log(`Answer "yes" if given number is prime. Otherwise answer "no"`);
  let i = 0;
  do {
    const number = getRandomIntInclusive(3, 100);
    const correctAnswer = primeCheck(number);
    console.log(`Question: ${number}`);
    let userAnswer = readLineSync.question(`Your answer: `);
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

brainPrime(userName);

module.exports = brainPrime;
