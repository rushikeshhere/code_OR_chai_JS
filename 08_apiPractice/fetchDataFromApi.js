// Here i used Async and await to print the data from the api
// async function getAllUsersData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E :", error);
//     }

// }
// getAllUsersData();

// This is the another way to print tha data from api but without using async and await
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    }).then((data) => console.log(data))
    .catch((error) => console.log(error))