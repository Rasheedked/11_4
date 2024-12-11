// focusblurSignup.js
var helpMessages = [
    "Enter your first name.",
    "Enter your last name.",
    "Provide a valid email address in the format user@example.com",
    "Choose a username (required).",
    "Set your password (required).",
    "Enter your phone number in the format ### ###-####",
    "Select your age group.",
    "Choose your gender from the dropdown.",
    "Form submitted successfully.",
    "Form reset successfully.",
    "" 
];

var helpTextDiv;

function init() {
    helpTextDiv = document.getElementById("helpText");
    //Register event listeners for each input
    registerListeners(document.getElementById("firstName"), 0);
    registerListeners(document.getElementById("lastName"), 1);
    registerListeners(document.getElementById("email"), 2);
    registerListeners(document.getElementById("username"), 3);
    registerListeners(document.getElementById("password"), 4);
    registerListeners(document.getElementById("phone"), 5);
    registerListeners(document.getElementById("under18"), 6);
    registerListeners(document.getElementById("gender"), 7);
    registerListeners(document.querySelector("button[type='submit']"), 8);
    registerListeners(document.querySelector("button[type='reset']"), 9);
}


function registerListeners(element, messageIndex) {
    element.addEventListener("focus", function () {
        helpTextDiv.innerHTML = helpMessages[messageIndex];
        helpTextDiv.style.display = "block"; 
    });
    element.addEventListener("blur", function () {
        helpTextDiv.innerHTML = helpMessages[10];
        helpTextDiv.style.display = "none"; 
    });
}

// Attach the init function to the window load event
window.addEventListener("load", init, false);
