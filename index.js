const timeValue = document.querySelector("#time-value");
const timeError = document.querySelector("#time-error");
const convertBtn = document.querySelector(".convert-btn");
const resultValue = document.querySelector(".result-value");
const fromUnit = document.querySelector("#from-unit");
const toUnit = document.querySelector("#to-unit")


convertBtn.addEventListener("click", function() {
    const time = Number(timeValue.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    let isValid = true;

    if(timeValue.value === "") {
        timeValue.classList.add("input-error");
        timeError.textContent = "Please enter a time value";
        isValid = false;
    } else if(time < 0) {
        timeValue.classList.add("input-error");
        timeError.textContent = "Time cannot be negative.";
        isValid = false;
    } else {
        timeValue.classList.remove("input-error");
        timeError.textContent = "";
    }
    if(isValid === false) {
        return;
    }
    
    let seconds = 0;

    if(from === "days") {
        seconds = time * 86400;
    } else if(from === "hours") {
        seconds = time * 3600;
    } else if(from === "minutes") {
        seconds = time * 60;
    } else if(from === "seconds") {
        seconds = time;
    }

    let result = 0;

    if(to === "days") {
        result = seconds/86400;
    } else if(to === "hours") {
        result = seconds/3600;
    } else if(to === "minutes") {
        result = seconds/60;
    } else if(to === "seconds") {
        result = seconds;
    }

    resultValue.textContent = `${Number(result.toFixed(5))} ${to}`;
});

timeValue.addEventListener("input", function() {
    let time = Number(timeValue.value);
    if(timeValue.value !== "" && time >= 0) {
        timeError.textContent = "";
        timeValue.classList.remove("input-error");
    }
});