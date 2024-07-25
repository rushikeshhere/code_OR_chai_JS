const myObject = {
    id: 102,
    name: "Ramesh",
    adress: "Pune"
}

for (const key in myObject) {
    //console.log(`${key} and its value is ${myObject[key]}`);
}

const myArray = ["Rushikesh", "Rajesh", "champesh", "Kamlesh"];

for (const iterator in myArray) {
    //console.log(iterator);
}  // it will return index of array Element


for (const iterator in myArray) {
    // console.log(myArray[iterator]);
}  // it will return actual Element of Array