// DOM Elements
const enteredCharBox = document.getElementById("entered-chars");
let remainedCharsBox = document.getElementById("remained-chars");
const messageBox = document.querySelector(".wrapper textarea");

// In here we set our maximun character to 280
const totalChars = 280;

let enteredChars = 0;
let remainedChars = totalChars;

// this window object will run as soon as the page is loaded
window.addEventListener("DOMContentLoaded", () => {
    enteredCharBox.textContent = enteredChars;
    remainedCharsBox.textContent = remainedChars;  
});


messageBox.addEventListener("keyup", updateCharsInfo);
messageBox.addEventListener("paste", updateCharsInfo);

function updateCharsInfo() {
    enteredChars = messageBox.value.length;
    remainedCharsBox = totalChars - enteredChars;

    // this if statement will check if we have max out the charecter limit
    if (enteredChars > totalChars) {
        let tempChars = messageBox.value.slice(0, 280);
        messageBox.value = tempChars;
        enteredChars = messageBox.value.length;
        remainedChars = totalChars - enteredChars;
    }

    enteredCharBox.textContent = enteredChars;
    remainedCharsBox.textContent = remainedChars
}