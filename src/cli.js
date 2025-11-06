const readLineSync = require('readline-sync')

const startAnswer = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readLineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}

module.exports = startAnswer
