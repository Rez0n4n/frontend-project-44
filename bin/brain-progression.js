#!/usr/bin/env node
const readLineSync = require("readline-sync");
const startAnswer = require("../src/cli.js");

const userName = startAnswer();

const brainProgression = (userName) => {
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

  const seqArr = (num1, num2) => {
    const arr = [];
    for (let i = 0; i <= 10; i += 1) {
      let currentElement = num1 + i * num2;
      arr.push(currentElement);
    }
    return arr;
  };
  let i = 0;
  do {
    const num1 = getRandomIntInclusive(1, 100);
    const num2 = getRandomIntInclusive(1, 10);
    const num3 = getRandomIntInclusive(0, 9);
    const arr = seqArr(num1, num2);
    const correctAnswer = arr[num3];
    arr[num3] = "..";
    console.log(`Question: ${arr.join(" ")}`);
    let userAnswer = readLineSync.question(`Your answer: `);
    const ok = answerCheck(Number(userAnswer), correctAnswer);
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

brainProgression(userName);
