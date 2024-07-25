
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".result");

    if (height === '' || height == 0 || isNaN(height)) {
        result.innerHTML = `You Entered Height : ${height}` + "<br> Please provide Valid Height"
    }
    else if (weight === '' || weight == 0 || isNaN(weight)) {
        result.innerHTML = `You Entered Weight : ${weight}` + "<br> Please provide Valid Weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //result.innerHTML = ` Your BMI is <span >${bmi}</span>`;
        if (bmi < 18.5) {
            result.innerHTML = ` Your BMI is <span style="color:rgb(66, 227, 245); font-size:25px;">${bmi}</span>`;
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = ` Your BMI is <span style="color:green; font-size:25px;">${bmi}</span>`;
        }
        else if (bmi >= 25.0 && bmi <= 29.9) {
            result.innerHTML = ` Your BMI is <span style="color:yellow; font-size:25px;">${bmi}</span>`;
        }
        else {
            result.innerHTML = ` Your BMI is <span style="color:red; font-size:25px;">${bmi}</span>`;
        }
    }
})


