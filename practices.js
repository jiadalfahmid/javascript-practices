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

// Market total cost calculator
/*
 *function totalCost(shirtQuantity, pantQuantity, shoeQuantity) {
 *  const shirtPrice = 500;
 *  const pantPrice = 300;
 *  const shoePrice = 800;
 *
 *  shirtTotalPrice = shirtPrice * shirtQuantity;
 *  pantTotalPrice = pantPrice * pantQuantity;
 *  shoeTotalPrice = shoePrice * shoeQuantity;
 *
 *  totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
 *  return totalPrice;
 *}
 *
 *console.log(totalCost(2, 1, 1));
 */

// expensive phone calculator
/*
 *const mobiles = [
 *  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
 *  { name: "xiaomi", price: 18000, camera: "12mp", color: "black" },
 *  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
 *  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
 *  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
 *  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
 *];
 *
 *function expensivePhone(phones) {
 *  let max = phones[0];
 *  for (let phone of phones) {
 *    if (phone.price > max.price) {
 *      max = phone;
 *    }
 *  }
 *  return max.name;
 *}
 *
 *let expPhone = expensivePhone(mobiles)
 *console.log('The most expensive phone is', expPhone);
 */

// Shopping cart calculation
/*

*const products = [
*  { name: "shampoo", price: 300, quantity: 2 },
*  { name: "chiruni", price: 100, quantity: 3 },
*  { name: "shirt", price: 700, quantity: 5 },
*  { name: "pant", price: 1200, quantity: 1 },
*];
*
*function totalPrice(productsInfo) {
*  let total = 0;
*  for (let product of productsInfo) {
*    totalCost = product.price * product.quantity;
*    total += totalCost;
*  }
*  return total;
*}
*totalTaka = totalPrice(products);
*console.log(totalTaka);
*/
