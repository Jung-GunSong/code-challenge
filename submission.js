const findSum = function(array) {
  // your code here - don't forget to return a number!
  let result =0;
  for (let element of array){
    result += element;
    return result;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  let countingObj = {};
  for (let element of array){
    if (countingObj[element] === undefined){
      countingObj[element] = 1;
    } else{
      countingObj[element] += 1;
    }
   let countingObjKeys = Object.keys(countingObj);
   let coutingObjValues = Object.values(countingObj);
   let mostKey = null;
   let leastKey = null;
   let mostValue = coutingObjValues.reduce((function (accumulator, currentValue){
      if (currentValue > accumulator){
        accumulator = currentValue;
      }
    
},0);

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
