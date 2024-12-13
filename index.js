document.getElementById("validateButton").addEventListener("click", function () {
    const input = document.getElementById("variableInput").value;
    const resultElement = document.getElementById("result");

    const binaryPattern = /^[01]+[bB]$/;

    const hexadecimalPattern = /^[0-9a-fA-F]+[hH]$/;

    let isValid = binaryPattern.test(input) || hexadecimalPattern.test(input);

    if (isValid) {
        resultElement.textContent = "Число коректне ";
    } else {
        resultElement.textContent = "Число некоректне ";
    }

});
