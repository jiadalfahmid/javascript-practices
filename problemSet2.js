// Find the lowest number in the array below.
/*
 * const heights = [167, 190, 120, 165, 137];
 *
 * function lowestNumber(array) {
 *   let lowestNumber = array[0];
 *
 *   for (const num of array) {
 *     if (num < lowestNumber) {
 *       lowestNumber = num;
 *     }
 *   }
 *   return lowestNumber;
 * }
 *
 * console.log(lowestNumber(heights));
 */

// Find the friend with the smallest name.
/*
 *const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
 *
 *function smallestName(names) {
 * let nameLength = names[0].length;
 *  let smallestNameIs = names[0];
 *  for (const name of names) {
 *    if (name.length < nameLength) {
 *      smallestNameIs = name;
 *    }
 *  }
 *  return smallestNameIs;
 *}
 *
 *console.log(smallestName(friends));
 */

// Your task is to calculate the total budget required to buy electronics:
/*
*const laptop = "35000 tk";
*const tablet = "15000 tk";
*const mobile = "20000 tk";
*let products = [laptop, tablet, mobile];
*
*function prices(products) {
*  let productPrice = [];
*  for (const product of products) {
*    productPrice.push(parseInt(product.split(" ")[0]));
*  }
*  let total = 0;
*  for (const price of productPrice) {
*    total += price;
*  }
*  return total;
*}
*
*console.log(prices(products));
 */

// average price of phone
