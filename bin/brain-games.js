#!/usr/bin/env node
const startAnswer = require("../src/cli.js");
const brainEven = require("../bin/brain-even.js");

const userName = startAnswer();
brainEven(userName);
