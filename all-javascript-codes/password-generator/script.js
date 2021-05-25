// DOM Element
const button = document.querySelector(".btn");
const inputField = document.querySelector(".input-field");

// create an array of random values (A-Z, a-z, 0-9) and symbols
const values = ["A", "B", "C", "D", "E", "F","G","H","I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "5", "6", "7", "8", "9", "!", "@", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

// event listener for our button
button.addEventListener("click", pickRandomValue);

// pickRandomValue function will be called when btn is clicked
function pickRandomValue() {
    let randomValues = "";

    // looping over 20 values
    for (let index = 0; index < 20; index++) {
        let random = Math.floor(Math.random() * values.length);
        randomValues += values[random];
    }
    inputField.value = randomValues;
    /* this console.log() is here for you to see the generated string in your browser console :) */
    console.log(randomValues);
}