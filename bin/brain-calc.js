#!/usr/bin/env node
const readLineSync = require("readline-sync");
const startAnswer = require("../src/cli.js");

const userName = startAnswer();
const brainCalc = (userName) => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const mathAction = ["+", "-", "*"];

  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  const answerCheck = (userAnswer, mathResult) => {
    if (userAnswer === mathResult) {
      return true;
    }
    return false;
  };

  console.log(`What is the result of the expression?`);
  let i = 0;
  do {
    const number1 = getRandomIntInclusive(1, 100);
    const number2 = getRandomIntInclusive(1, 100);
    const randomMathAction =
      mathAction[getRandomIntInclusive(0, mathAction.length - 1)];
    const mathResult = ops[randomMathAction](number1, number2);
    console.log(`Question: ${number1} ${randomMathAction} ${number2}`);
    let userAnswer = readLineSync.question(`Your answer: `);
    const ok = answerCheck(Number(userAnswer), mathResult);
    if (!ok) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${mathResult}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    ++i;
    console.log(`Correct!`);
  } while (i < 3);
  console.log(`Congratulations,${userName}!`);
};

brainCalc(userName);
