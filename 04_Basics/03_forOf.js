const myObject = {
    id: 102,
    name: "Ramesh",
    adress: "Pune"
}
// this is not possible for Object using for Of

// for (const key of myObject) {
//     console.log(`${key} `);
// }


const myArray = ["Rushikesh", "Rajesh", "champesh", "Kamlesh"];

for (const iterator of myArray) {
    console.log(iterator);
}