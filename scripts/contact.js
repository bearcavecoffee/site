// Get elements
const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

// Regex validators
const nameRx = "[A-Za-z]*";
const emailRx = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
const phoneRx = "/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im";

// Determine if something matches
function match(value, regex) {
    if (!value) {
        return false;
    }

    if (value.trim() === "") {
        return false;
    }

    return value.match(regex);
}

// Validator
function validate(element, regex) {
    // Is a match
    const matchStatus = match(element.value, regex);

    // Set match status
    element.matchStatus = matchStatus;

    // Inform user and disable button
    if (!matchStatus) {
        element.className = "error";
        submit.className = "button blue disabled";
        submit.submitReady = false;
        return;
    }

    // Redo class name
    element.className = "";

    // Enable submit button if everything is valid
    if (fName.matchStatus && lName.matchStatus && email.matchStatus
        && phone.matchStatus && message.matchStatus) {
        submit.className = "button blue";
        submit.submitReady = true;
    }
}

// Submit
function submitMessage() {
    // Ignore if the button is disabled
    if (!submit.submitReady) {
        return false;
    }

    // Do nothing if everything isn't valid
    if (!fName.matchStatus || !lName.matchStatus || !email.matchStatus
        || !phone.matchStatus || !message.matchStatus) {
        submit.className = "button blue";
        submit.submitReady = false;
    }

    alert("Submitted");
}

// Hook events
fName.onblur = () => validate(fName, nameRx);
lName.onblur = () => validate(lName, nameRx);
email.onblur = () => validate(email, emailRx);
phone.onblur = () => validate(phone, phoneRx);
message.onblur = () => validate(message, nameRx);