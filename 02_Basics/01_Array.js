// arrays

const myArray = [1, 2, 3, 4, 5];
const myNewArray = ["Rushikesh", "Nagraj"];
// console.log(myArray[1])

// Arrays Methods
// console.log(myArray.length);

const marvel_Heroes = ["Ant-Man", "Tonny Stark", "Thor", "Hulks"];
const dc_Heroes = ["sprider-Man", "Bat-Man"];
// marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes);
// console.log(marvel_Heroes[4])
// console.log(marvel_Heroes[4][1]);

let a_group_of_Arrays = [...marvel_Heroes, ...dc_Heroes]; // grouping the multiple Arrays into single array
console.log(a_group_of_Arrays);

const array = [1, 2, 3, 4, 5, 6, [7, 8, 9], [11, 12, 13, [15, 16, 17]]];
// console.log(array.flat(Infinity));

// console.log(Array.isArray("Rushikesh")); // it will check it is array or not => false

let numbersOfElements = Array.from("Rushikesh"); // it will create an array of Rushikesh name elements
// console.log(numbersOfElements.length); // 9

let score1 = 100;
let score2 = 200;
let score3 = 300;

let aNewArray = Array.of(score1, score2, score3)
console.log(aNewArray);