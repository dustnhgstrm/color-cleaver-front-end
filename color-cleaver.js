const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const color1 = getInput(1);
const color2 = getInput(2);
const doingTheProblem = isValidPrimary(color1);
const doingTheProblem0 = isValidPrimary(color2);
const doingTheOtherProblem = isValidSecondary(color1);
const doingTheOtherProblem0 = isValidSecondary(color2);
const variablesHelp = colorCombinator(color1, color2);
const variablesHurt = colorDeconstructor(color1);

if (color1 === undefined && color2 === undefined) {
  console.log("You must put in at least one color!");
} else if (
  color1 === color2 &&
  (doingTheProblem === true || doingTheOtherProblem0 === true)
) {
  console.log("You entered the same color twice; try one more time!");
} else if (
  color1 === color2 &&
  (doingTheProblem === false || doingTheOtherProblem0 === false)
) {
  console.log("You entered the same word twice; and it isn't a color!");
} else if (doingTheProblem === true && color2 === undefined) {
  console.log("You must put in two primary colors to see what they make!");
} else if (doingTheProblem === true && doingTheProblem0 === true) {
  console.log(
    "Anyone can mix " +
      color1 +
      " and " +
      color2 +
      " to get " +
      variablesHelp +
      "."
  );
} else if (color2 === undefined && doingTheOtherProblem === true) {
  console.log(
    "With " + variablesHurt + " mixed together, " + color1 + " is formed."
  );
} else if (
  (doingTheProblem === true && doingTheOtherProblem0 === true) ||
  (doingTheOtherProblem === true && doingTheProblem0 === true)
) {
  console.log("You can't mix a primary and secondary color here!");
} else if (doingTheProblem === true && doingTheProblem0 === false) {
  console.log(color1 + " is a primary color, however, " + color2 + " is not.");
} else if (doingTheProblem === false && doingTheProblem0 === true) {
  console.log(color2 + " is a primary color, however, " + color1 + " is not.");
} else if (doingTheOtherProblem === true && doingTheOtherProblem0 === true) {
  console.log("You can't mix two secondary colors here!");
} else if (doingTheOtherProblem === false && doingTheOtherProblem0 === true) {
  console.log(
    color1 +
      " isn't a valid color,  " +
      color2 +
      " is a good secondary color though."
  );
} else if (doingTheOtherProblem === true && doingTheOtherProblem0 === false) {
  console.log(
    color2 +
      " isn't a valid color, " +
      color1 +
      " is a good secondary color though."
  );
} else
  console.log(
    "Your input doesn't match any colors we have on file, please try again!"
  );
