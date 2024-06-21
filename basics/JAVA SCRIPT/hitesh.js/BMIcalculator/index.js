const form = document.querySelector(".form");
const result = document.querySelector(".result");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector(".height").value);
    const weight = parseInt(document.querySelector(".weight").value);
    if (Height<0 || weight<0 || isNaN(height) || isNaN(weight)) {
        result.innerHTML = "Please input valid height and weight";
    } else {
        const bmi = weight / Math.pow(height, 2);
        result.innerHTML = `BMI is = ${bmi.toFixed(2)}`;
    }
});