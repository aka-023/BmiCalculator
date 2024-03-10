function calculate() {
    let height = parseInt(document.getElementById("height").value)
    let weight = parseInt(document.getElementById("weight").value)

    let ans = document.getElementById("output");
    if(isNaN(height) || isNaN(weight)){
        ans.textContent = "Not a valid Input....";
        return;
    }
    let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
    if (bmi < 18.6) {
        ans.innerHTML =`Under Weight : <span>${bmi}</span>`;
    }
    else if (bmi >= 18.6 && bmi < 24.9) {
        ans.innerHTML = `Normal : <span>${bmi}</span>`;
    }
    else {
        ans.innerHTML = `Over Weight : <span>${bmi}</span>`;
    }
}