// Immediately Invoked Function Expression ( IIFE )

// function chai() {
//     console.log("hi");
// }
// chai() // normal function calling

(function chai() {
    console.log("DB Connected!");
})(); // IIFE


(() => {
    console.log("DB is Connected Two");
})();