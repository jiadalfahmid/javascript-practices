// Write a function to convert temperature from Celsius to Fahrenheit.
/*
 *function celsiusToFahrenheit(celsius) {
 *  let fahrenheit = celsius * (9 / 5) + 32;
 *  return fahrenheit;
 *}
 *
 *const celsius = 32;
 *let fahrenheit = celsiusToFahrenheit(celsius);
 *console.log('the temperature is: ',fahrenheit,'°F')
 */

// Count how many times the a number is repeated in the array.
/*
 *let numbers = [5, 6, 11, 12, 98, 5];
 *
 *function countRepeat(array, find) {
 *  let count = 0;
 *  for (let num of array) {
 *    if (find === num) {
 *      count++;
 *    }
 *  }
 *  return count;
 *}
 *
 *let find = 13;
 *let ifRepeated = countRepeat(numbers, find);
 *console.log(ifRepeated);
 */

// Write a function to count the number of vowels in a string.
/*
 *let sentence = "I love you";
 *
 *function vowelsCounter(sentence) {
 *  const vowels = "aeiou";
 *  let count = 0;
 *  for (let letter of sentence) {
 *    if (vowels.includes(letter.toLowerCase())) {
 *      count++;
 *    }
 *  }
 *  return count;
 *}
 *
 *console.log(vowelsCounter(sentence));
 */

// Write a function to find the longest word in a given string.

let sentence = "I am learning Programming to become a programmer";
/*
 *function longestWordFinder(sentence) {
 *  let longestWord='';
 *  let words = sentence.split(' ');
 *  for (let word of words) {
 *    if (longestWord.length < word.length) {
 *      longestWord = word;
 *    }
 *  }
 *  return longestWord;
 *}
 *
 *console.log(longestWordFinder(sentence));
 */

// Generate a random number between 10 to 20.
/*
*let generate = Math.floor(Math.random() * 11)+10;
*console.log(generate);
*/
