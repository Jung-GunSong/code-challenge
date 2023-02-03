const findSum = function (array) {
  // your code here - don't forget to return a number!
  let result = 0;
  for (let element of array) {
    result += element;
  }
  return result;
};


const findFrequency = function (array) {
  // your code here - don't forget to return an object!
  let countingObj = {};
  for (let element of array) {
    if (countingObj[element] === undefined) {
      countingObj[element] = 1;
    } else {
      countingObj[element] += 1;
    }
  }
  let countingObjKeys = Object.keys(countingObj);
  let coutingObjValues = Object.values(countingObj);
  let mostValue = coutingObjValues.reduce(function (accumulator, currentValue) {
    if (currentValue > accumulator) {
      accumulator = currentValue;
    }
    return accumulator;
  }, 0);
  let leastValue = coutingObjValues.reduce(function (
    accumulator,
    currentValue
  ) {
    if (currentValue < accumulator) {
      accumulator = currentValue;
    }
    return accumulator;
  });
  let result = {
    most: countingObjKeys[coutingObjValues.indexOf(mostValue)],
    least: countingObjKeys[coutingObjValues.indexOf(leastValue)],
  };
  return result;
};



const isPalindrome = function (str) {
  // your code here - don't forget to return a boolean!
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i].toUpperCase() !== str[str.length - 1 - i].toUpperCase()) {
      return false;
    }
  }
  return true;
};


const largestPair = function (array) {
  // your code here - don't forget to return a number!
  let count = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] * array[i + 1] > count) {
      count = array[i] * array[i + 1];
    }
  }
  return count;
};


const removeParenth = function (str) {
  // your code here - don't forget to return a string!
  let chars = str.split("");
  chars.splice(chars.indexOf("("), chars.indexOf(")") + 1 - chars.indexOf("("));
  let result = chars.join("");
  return result;
};

const scoreScrabble = function (str) {
  // your code here - don't forget to return a number!
  let onePointsEach = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
  let twoPointsEach = ["d", "g"];
  let threePointsEach = ["b", "c", "m", "p"];
  let fourPointsEach = ["f", "h", "v", "w", "y"];
  let fivePointsEach = ["k"];
  let eigthPointsEach = ["j", "x"];
  let tenPointsEach = ["q", "z"];

  let score = 0;

  for (let char of str) {
    if (onePointsEach.includes(char)) {
      score += 1;
    } else if (twoPointsEach.includes(char)) {
      score += 2;
    } else if (threePointsEach.includes(char)) {
      score += 3;
    } else if (fourPointsEach.includes(char)) {
      score += 4;
    } else if (fivePointsEach.includes(char)) {
      score += 5;
    } else if (eigthPointsEach.includes(char)) {
      score += 8;
    } else if (tenPointsEach.includes(char)) {
      score += 10;
    }
  }
  return score;
};
