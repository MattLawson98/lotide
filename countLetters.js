const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  else { 
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
  }
  
};
function countLetters(sentence){
let results = {};
let newSentence = sentence.replace(/\s/g, '');
for(const letter of newSentence){
    if (results[letter]){
      results[letter] += 1;
    }
    else {
      results[letter] = 1;
    }
  }
return results; 
}
console.log(countLetters("lighthouse in the house"));