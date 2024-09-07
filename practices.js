// inch to feet
/*
 * function inchToFeet(inch) {
  *const feet = parseInt(inch / 12);
  *const left = inch % 12;
  *const result = feet + " " + "feet" + " " + left + " " + "inch";

  *return result;
*}

*console.log(inchToFeet(30));
 */
// -------------------------------------------------

// Determining Leap Years
// To determine if a year is a leap year, we apply a simple rule: if the year is divisible by 4, it's a leap year, except for end-of-century years, which must also be divisible by 400.
/*
*function isLeapYear(year) {
*  if (year % 4 === 0 && year % 400 === 0) {
*    return true;
*  }
*  return false;
*}

*const yearIs = 2052;
*console.log(isLeapYear(yearIs));
*/

// Average of Odds numbers
/*
 *function avgOdds(numbers) {
 * let odds = [];
 *  for (const num of numbers) {
 *    if (num % 2 === 1) {
 *      odds.push(num);
 *    }
 *  }
 *  let sum = 0;
 *  let length = odds.length;
 *  for (let odd of odds) {
 *    sum += odd;
 *  }
 *  let avg = sum / length;
 *  return avg;
 *}
 *
 *let random = [24, 43, 45, 53, 75, 7];
 *
 *const result = avgOdds(random);
 *console.log(result);
 */

// min height form array
/*
*const height = [56, 75, 66, 65, 72, 63, 76, 2];
*
*function minHeight(numbers) {
*  let min = numbers[0];
*  for (const num of numbers) {
*    if (min > num) {
*      min = num;
*    }
*  }
*  return min;
*}
*
*const result = minHeight(height);
*console.log(result);
 */


