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
/*
 *const phones = [
 * { model: "PhoneA", brand: "Iphone", price: 95000 },
 * { model: "PhoneB", brand: "Samsung", price: 40000 },
 * { model: "PhoneC", brand: "Oppo", price: 26000 },
 * { model: "PhoneD", brand: "Nokia", price: 35000 },
 * { model: "PhoneE", brand: "Iphone", price: 105000 },
 * { model: "PhoneF", brand: "HTC", price: 48000 },
 *];
 *
 *function avgPrice(phones)
 *{
 * sum=0;
 * for(const phone of phones){
 *  sum+=phone.price;
 * }
 * avg= sum / phones.length
 * return avg;
 *}
 *
 *let price = avgPrice(phones)
 *console.log(price)
 */

// total salary

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary(employees) {
  let totalSalary = 0;
  for (const employee of employees) {
    let increased = employee.experience * employee.increment;
    let presentSalary = employee.starting + increased;
    totalSalary += presentSalary;
  }
  return totalSalary;
}

const total= totalSalary(employees);
console.log(total);
