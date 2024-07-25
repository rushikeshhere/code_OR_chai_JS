// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("promise fullfilled");
//         resolve();
//     }, 2000)
// })
// promise.then(function () {
//     console.log("promise resolved");
// }) // this is the one way to declare promise 

// Another way to call promise
// new Promise((resolve, reject) => {
//     console.log("ASync task Two, fullfilled");
//     resolve();
// }).then(() => {
//     console.log("Promise two Resolved");
// })


// Another Example which is of the google

// new Promise((resolve, reject) => {
//     let g1 = "geeksforgeeks";
//     let g2 = "geeksForgeeks";
//     if (g1 === g2) {
//         resolve();
//     }
//     else {
//         reject();
//     }
// }).then(() => {
//     console.log("Yes g1 and g2 is equal")
// }).catch(() => {
//     console.log("sorry strings  are not matched");
// })


// last way

// let promiseThree = new Promise((resolve, reject) => {
//     resolve({ username: "rishi121", emailid: "rushikeshhere@gmail.com" })
// })
// promiseThree.then((user) => {
//     console.log(user);
// })



let promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let condition = true;
        if (!condition) {
            resolve({ username: "Rakesh121", emailid: "rakesh121@gmail.com" })
        }
        else {
            console.log("Error, js went Wrong");
        }
    }, 1000);
})

async function consumeFour() {
    const response = await promiseFour
    console.log(response);
}
consumeFour();