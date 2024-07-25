
const myArray = ["Rushikesh", "Rajesh", "champesh", "Kamlesh"];

//  used Arrow Function to print Array Element using ForEach Method
myArray.forEach((item) => {
    //     console.log(item)
})

// use normal function to print Array Element using forEach 
myArray.forEach(function (item) {
    // console.log(item);
})

function printArray(item) {
    // console.log(item);
}
myArray.forEach(printArray)

myArray.forEach((item, index, arr) => {
    console.log(item, index, arr);
})