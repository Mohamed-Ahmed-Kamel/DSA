// Arrays
/*
Section 1. Adding/removing elements
	1. Push: Add one or more to the end of the array and returns the new array’s length.
	2. Unshift: Add one or more elements to the beginning of an array and returns the new array’s length.
	3. Pop: Removes the last element from an array and returns the removed element.
	4. Shift: Removes the first element from an array.
	5. Splice: Delete existing elements, insert new elements, and replace elements in an array.
	6. Slice: Extract a portion of an array and return it as a new array. This method does not modify the original array.
Section 2. Finding elements
	1. IndexOf: To find the position of an element in an array.
	2. LastIndexOf: To find the last position of an element in an array.
	3. Includes: To check if an element exists in an array.
	4. Find: To search for the first element in an array
	5. FindIndex: Returns the index of the element that satisfies a testing function or -1 if no element passed the test.
Section 3. High-order methods
	1. Map: To transform the elements, and include the results in a new array.
	2. Filter: To create a new array that contains a subset of elements of the original array.
	3. Reduce: To reducing an Array Into a Value, Starts from first
	4. ReduceRight: To reducing an Array Into a Value, Starts from last
	5. Every: Determining If All Array Elements Pass a Test
	6. Some: Check If at Least one Array Element Passes a Test
	7. Sort: To sort arrays of numbers, string, and objects.
	8. ToSorted: Like sort but it return a new array with elements sorted.
	9. ForEach: Executing a Function on Every Element
Section 4. Manipulating Arrays
	1. Concat: Merge Arrays
Section 5. Creating Arrays
Section 6. Flattening arrays
Section 7. Arrays to Strings
Section 8. Advanced Operations
Section 9. Accessing elements
Section 10. Reversing elements
Section 11. Multidimensional Array
*/

/*                     Section 1. Adding/removing elements                     */
// Push
// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9];
// num1.push(...num2, 10);
// console.log(num1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Unshift
// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9];
// num1.unshift(20, ...num2);
// console.log(num1); // [20, 6, 7, 8, 9, 1, 2, 3, 4, 5]

// Pop
// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9];
// num1.pop(); // 5 Removed
// console.log(num1); // [1, 2, 3, 4]
// console.log(num1.length);

// Shift
// let numbers = [10, 20, 30];
// let number = numbers.shift(); // 10

// console.log({ number }); // 10 Removed
// console.log({ numbers }); // [20, 30]
// console.log({ length: numbers.length }); // 2

// Remove all elements
// let numbers = [10, 20, 30];
// let number;
// while ((number = numbers.shift()) != undefined) {
//   console.log(number);
// }

// Splice
// 1. Deleteing elements
// The splice() method changes the original array and returns an array that contains the deleted elements.
// let scores = [10, 20, 30, 40, 50];
// let deletedScores = scores.splice(0, 3);
// console.log(deletedScores); // [10, 20, 30] Deleted
// console.log(scores); // [40, 50]

// 2. Insert new elements
// The splice() method changes the original array. Also, the splice() method does not remove any elements, therefore, it returns an empty array.
// let colors = ['red', 'green', 'blue'];
// colors.splice(2, 0, 'yellow', 'orange');
// console.log(colors); // ['red', 'green', 'yellow', 'orange', 'blue']

// 3. Replace elements
// let languages = ['C', 'C++', 'Java', 'JavaScript'];
// languages.splice(0, 3, 'Python', 'Ruby');
// console.log(languages); // ['Python', 'Ruby', 'JavaScript']

// Slice
// 1. Colon An Array
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.slice();
// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(newNumbers); // [1, 2, 3, 4, 5]

// 2. Copy a portion of an array
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.slice(0, 2);
// console.log(newNumbers); // [1, 2]
// console.log(numbers); // [1, 2, 3, 4, 5]

// 3. Convert array-like objects into arrays
// function toArray() {
// 	return Array.prototype.slice.call(arguments);
// }
// let classification = toArray('A','B','C');
// console.log(classification); // ["A", "B", "C"]

/*                     Section 2. Finding elements                     */
// IndexOf
// let scores = [10, 20, 30, 10, 40, 20];
// console.log(scores.indexOf(10)); // 0
// console.log(scores.indexOf(30)); // 2
// console.log(scores.indexOf(50)); // -1
// console.log(scores.indexOf(20)); // 1
// console.log(scores.indexOf(20, -1)); // 5 (fromIndex = 6+ (-1) = 5)
// console.log(scores.indexOf(20, -5)); // 1 (fromIndex = 6+ (-5) = 1)

// let guests = [
// 	{ name: "Mohamed", age: 22 },
// 	{ name: "Ahmed", age: 50 },
// 	{ name: "Kamel", age: 70 },
// ];
// console.log(guests.indexOf({ name: "Ahmed", age: 50 }));

// function find(needle, haystack) {
//     let results = [];
//     let idx = haystack.indexOf(needle);
//     while (idx != -1) {
//         results.push(idx);
//         idx = haystack.indexOf(needle, idx + 1);

//     }
//     return results;
// }
// console.log(find(10,scores)); // [0, 3]

// LastIndexOf
// let scores = [10, 20, 30, 10, 40, 20];
// console.log(scores.lastIndexOf(10)); // 3
// console.log(scores.lastIndexOf(20)); // 5
// console.log(scores.lastIndexOf(50));// -1

// Includes
// array.includes(element,fromIndex);
// let numbers = [1, 2, 3, 4, 5];
// if (numbers.indexOf(10) === -1) {
// 	console.log('Not Found');
// } else {
// 	console.log('Found');
// }

// console.log(numbers.includes(1)); // true
// console.log(numbers.includes(4)); // true
// console.log(numbers.includes(3, 3)); // false

// console.log([NaN].indexOf(NaN)); // -1
// console.log([NaN].includes(NaN)); // true
// console.log([-0].includes(+0)) // true

// let bmw = {name: 'BMW' };
// let toyota = { name: 'Toyota'};
// let ford = {name: 'Ford'};
// let cars = [ford, toyota]; // [{name: 'Ford'}, {name: 'Toyota'}]
// console.log(cars.includes(bmw)); // false
// console.log(cars.includes(ford)); // true
// console.log(cars.includes(toyota)); // true

// Find
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.find((ele) => {
// 	return ele == 3;
// })
// console.log(result);

// let customers = [
// 	{
// 		name: "Mohamed",
// 		credit: 100,
// 	},
// 	{
// 		name: "Ahmed",
// 		credit: 200,
// 	},
// 	{
// 		name: "Kamel",
// 		credit: 300,
// 	},
// 	{
// 		name: "Ali",
// 		credit: 400,
// 	}
// ];
// let result = customers.find((ele) => {
// 	return ele.credit > 100
// })
// console.log(result); // {name: "Ahmed", credit: 200}

// FindIndex
// let ranks = [1, 5, 7, 8, 10, 7];
// let index = ranks.findIndex((rank) => {
//     return rank === 7
// })
// console.log(index); // 2
// let index = ranks.findIndex((rank, index) => {
// 	return rank === 7 && index === 5
// })
// console.log(index); // 5

// const products = [
// 	{ name: 'Phone', price: 1000 },
// 	{ name: 'Computer', price: 1500 },
// 	{ name: 'Tablet', price: 2000 },
// ];
// let index = products.findIndex((product) => {
// 	return product.price > 1000
// })
// console.log(index)

/*                     Section 3. High-order methods                     */
// Map
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map((ele) => {
// 	return ele * 10;
// })
// console.log(newNumbers); // [10, 20, 30, 40, 50]
// console.log(numbers); // [1, 2, 3, 4, 5]

// Filter
// let cities = [
// 	{ name: "Los Angeles", population: 2000000 },
// 	{ name: "New York", population: 3000000 },
// 	{ name: "Chicago", population: 4500000 },
// 	{ name: "Houston", population: 1500000 },
// 	{ name: "Philadelphia", population: 1000000 },
// ];
// Old way
// let bigCities = [];
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i].population > 3000000) {
//         bigCities.push(cities[i]);
//     }
// }
// console.log(bigCities); // [{name: "Los Angeles", population: 3792

// New way --> ES6
// let result = cities.filter((ele) => {
// 	return ele.population > 3000000
// });
// console.log(result); // [{name: "Los Angeles", population: 3792

// Chain three methods
// let data = cities
//     .filter(city => city.population < 3000000)
//     .sort((c1, c2) => c1.population - c2.population)
//     .map(city => console.log(city.name + ': ' + city.population));
// console.log(data);

// function isInRange(value) {
//     if (typeof value !== 'number') {
//         return false;
//     }
//     return value >= this.lower && value <= this.upper;
// }
// let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];
// let range = {
//     lower: 1,
//     upper: 10
// };
// let numberInRange = data.filter(isInRange, range);
// console.log(numberInRange); // [10, 1, 5]

// Reduce
// let numbers = [10, 20, 30];
// Old way
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
// 	sum += numbers[i]
// }
// console.log(sum);
// New way --> ES6
// let sum = numbers.reduce((previousValue, currentValue, currentIndex, array) => {
// 	console.log(previousValue, currentValue, currentIndex, array);
// 	return previousValue + currentValue
// }, 0);
// console.log(sum);
/* When initialValue is passed or not passed.
	initialValue | previousValue | currentValue
	-------------------------------------------
	passed		 | initialValue	 | array[0]
	-------------------------------------------
	not passed	 | array[0]		 | array[1]
*/

// let shoppingCart = [
// 	{
// 		product: "phone",
// 		qty: 1,
// 		price: 500,
// 	},
// 	{
// 		product: "Screen Protector",
// 		qty: 1,
// 		price: 10,
// 	},
// 	{
// 		product: "Memory Card",
// 		qty: 2,
// 		price: 20,
// 	},
// ];
// let total = shoppingCart.reduce((previousValue, currentValue) => {
// 	return previousValue + (currentValue.price * currentValue.qty);
// }, 0);
// console.log(total);

// ReduceRight
// let numbers = [10, 20, 30];
// let sum = numbers.reduceRight((previousValue, currentValue, currentIndex, array) => {
// 	console.log({previousValue, currentValue, currentIndex});
// 	return previousValue + currentValue
// }, 0);
// console.log(sum);

// Every
// Old way
// let numbers = [1, 3, 0, 5];
// let result = true;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] <= 0) {
//         result = false;
//         break;
//     }
// }
// console.log(result);
// New way --> ES6
// let numbers = [1, 3, 5];
// let result = numbers.every((ele, index, array) => {
// 	return ele > 0;
// });
// console.log(result);

// let range = {
//     min: 0,
//     max: 10
// };

// let isInRange = numbers.every(function (ele) {
//     return ele >= this.min && ele <= this.max;
// }, range);
// console.log(isInRange);

/*
	Caution: Empty arrays
	If you call the every() method on an empty array,
	the method will always return true for any condition.
	For example:
*/
// let gtZero = [].every(e => e > 0); // any condition
// let ltZero = [].every(e => e < 0); // any condition

// console.log('gtZero:', gtZero); // true
// console.log('ltZero:', ltZero); // true



// Some
// Old way
// let marks = [ 4, 5, 7, 9, 10, 3 ];
// let lessThanFive = false;
// for (let index = 0; index < marks.length; index++) {
//     if (marks[index] < 5) {
//         lessThanFive = true;
//         break;
//     }
// }
// console.log(lessThanFive);
// New way
// let lessThanFive = marks.some((element, index, array ) => {
// 	console.log(element); // 4
// 	console.log(index); // 0
// 	console.log(array); // [elements]
// 	return element < 5
// });
// console.log(lessThanFive)

// function exists(value, array) {
// 	return array.some(ele => ele === value);
// }
// console.log(exists(4, marks)); // true
// console.log(exists(6, marks)); // false

// const range = {
// 	min: 8,
// 	max: 10
// }
// let result = marks.some(function (ele) {
// 	return ele > this.min && ele < this.max
// }, range);
// console.log(result); // true

// Caution: Empty arrays -> The result is always "false"
// console.log([].some(ele => ele >= 0)); // false
// console.log([].some(ele => ele <= 0)); // false



// Sort
// Notes: The sort() method changes the positions of the elements in the original array.
// Sorting an array of "Numbers"
// let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort()
// console.log(numbers) // [0, 1, 10, 2, 20, 3, 30]
/*
The compare() function accepts two arguments a and b.
The sort() method will sort elements based on the return value of the compare() function with the following rules:

If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.

To fix the issue of sorting the number, you can use the following syntax:
*/
// numbers.sort((a, b) => {
// 	if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// })
// console.log(numbers) // [0, 1, 2, 3, 10, 20, 30]


// Sorting an array of "Strings"
// let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
// animals.sort();
// console.log(animals) // ['ant', 'bee', 'cat', 'dog', 'elephant']

// To sort the animals array in descending order
// let animals = [
//     'cat', 'dog', 'elephant', 'bee', 'ant'
// ];

// animals.sort((a, b) => {
//     if (a > b)
//         return -1;
//     if (a < b)
//         return 1;
//     return 0;
// });
// console.log(animals);


// sorting array with mixed cases
// let mixedCaseAnimals = [
//     'Cat', 'dog', 'Elephant', 'bee', 'ant'
// ];

// mixedCaseAnimals.sort(function (a, b) {
//     let x = a.toUpperCase(),
//         y = b.toUpperCase();
//     return x == y ? 0 : x > y ? 1 : -1;
// });
// console.log(mixedCaseAnimals); // ['ant', 'bee', 'Cat', 'dog', 'Elephant']

// Sorting an array of strings with non-ASCII characters
// let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
// // animaux.sort();
// // console.log(animaux); // ['abeille', 'chat', 'zèbre', 'écureuil']

// animaux.sort(function (a, b) {
//     return a.localeCompare(b);
// });
// console.log(animaux); // ['abeille', 'chat', 'écureuil', 'zèbre']


// Sorting an array of objects by a specified property
// let employees = [
//     {name: 'Mohamed', salary: 90000, hireDate: "July 1, 2010"},
//     {name: 'Ahmed', salary: 75000, hireDate: "August 15, 2009"},
//     {name: 'Kamel', salary: 80000, hireDate: "December 12, 2011"}
// ];
// sort by salary
// employees.sort(function (x, y) {
//     return x.salary - y.salary;
// });
// console.table(employees); // [{75000}, {80000}, {90000}]

// Sorting objects by a string property
// employees.sort(function (x, y) {
//     let a = x.name.toUpperCase(),
//         b = y.name.toUpperCase();
//     return a == b ? 0 : a > b ? 1 : -1;
// });
// console.table(employees); // [{Ahmed}, {Kamel}, "Mohamed"]

// Sorting objects by the date property
// employees.sort(function (x, y) {
//     let a = new Date(x.hireDate),
//         b = new Date(y.hireDate);
//     return a - b;
// });
// console.table(employees); // [{Ahmed}, "Mohamed", {Kamel}]



// ToSorted
// Sort an array of "Strings":
// const colors = ['red','green','blue'];
// const sortedColors = colors.toSorted();

// console.log(colors); // ['red', 'green', 'blue']
// console.log(sortedColors); // ['blue', 'green', 'red']

// Sort an array of "Numbers":
// const scores = [3, 1, 2, 7, 9];
// const sortedScores = scores.toSorted((a,b) => a - b);

// console.log(scores); // Don't Change
// console.log(sortedScores); // [1, 2, 3, 7, 9]

// Original array of books
// const books = [
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//   { title: '1984', author: 'George Orwell', year: 1949 },
//   { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
// ];
// // Creating a sorted copy based on the publication year using toSorted()
// const sortedBooks = books.toSorted((a, b) => a.year - b.year);
// // Output the sorted copy and the original array
// console.log(sortedBooks);



// ForEach
// let ranks = ['A', 'B', 'C'];
// ranks.forEach((ele) => {
// 	console.log(ele + "a")
// })


// function Counter() {
// 	this.count = 0;
// 	let self = this;
// 	return {
//         increase: function () {
//             self.count++;
//         },
//         current: function () {
//             return self.count;
//         },
//         reset: function () {
//             self.count = 0;
//         }
//     }
// }
// let counter = new Counter();
// let numbers = [1, 2, 3];
// let sum = 0;
// numbers.forEach(function (e) {
//     sum += e;
//     this.increase();
// }, counter);

// console.log(sum); // 6
// console.log(counter.current()); // 3




/*                    Section 4. Manipulating Arrays                    */
// Concat
// Returns a new array and doesn’t change the original arrays.
// let odds = [1 ,3 ,5];
// let evens = [2, 4, 6];
// // merge odds and evens array
// let combined = odds.concat(evens);
// console.log('Result:', combined); // [1, 3, 5, 2, 4, 6]
// console.log('Odds:', odds); // [1, 3, 5]

// let combined = [].concat(odds, evens);
// console.log(odds); // [1, 3, 5]
// console.log(evens); // [2, 4, 6]
// console.log(combined); // [1, 3, 5, 2, 4, 6]

// let upper  = ['A','B','C'];
// let lower  = ['a','b','c'];
// let digits = [1,2,3];
// let alphanumerics = upper.concat(lower, digits);
// console.log(alphanumerics)


// Spread Operator: To merge multiple arrays as follows:
// let combined = [...odds, ...evens];
// console.log(combined);



/*                    Section 5. Creating Arrays                    */
/*                    Section 6. Flattening arrays                    */
/*                    Section 7. Arrays to Strings                    */
/*                    Section 8. Advanced Operations                    */
/*                    Section 9. Accessing elements                    */
/*                    Section 10. Reversing elements                    */
/*                    Section 11. Multidimensional Array                    */
