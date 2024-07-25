const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
        // if (e.target.id === "grey") {
        //     body.style.backgroundColor = "grey"
        // }
        // else if (e.target.id === "yellow") {
        //     body.style.backgroundColor = "yellow"
        // }
        // else if (e.target.id === "white") {
        //     body.style.backgroundColor = "white"
        // }
        // else if (e.target.id === "blue") {
        //     body.style.backgroundColor = "blue"
        // }
        // if (e.target.id === "green") {
        //     body.style.backgroundColor = "green"
        // }
        const value = e.target.id;
        switch (value) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;

            default:
                break;
        }
    })
})