var specChar = [
    "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."
];

var numChar = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var lowerCasedChar = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var upperCasedChar = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var passOpOut = ""

function options() {
    var passLength = parseInt(prompt(
        "Length of password? Must be a number between 8 and 129"
    ));

    if (isNaN(passLength) === true) {
        alert("Must provide a number. Click generate password for new password");
        return;
    } else if (passLength < 8) {
        alert("Must be at least 8 characters long");
        return;
    } else if (passLength > 128) {
        alert("Must be shorter than 129 characters")
    }

    var specCharOpt = confirm("Do you want special characters like ! & * ?");

    var numCharOpt = confirm("Do you want numbers?");

    var lowerCasedCharOpt = confirm("do you want lower cased characters?");

    var upperCasedCharOpt = confirm("Do you want UPPER CASED CHARACTERS?");

    if (specCharOpt === false && numCharOpt === false && lowerCasedCharOpt === false && upperCasedCharOpt === false) {
        alert("Must select at least 1 character type");
        return;
    }

    var passOp = {
        passLength: passLength,
        specCharOpt: specCharOpt,
        numCharOpt: numCharOpt,
        lowerCasedCharOpt: lowerCasedCharOpt,
        upperCasedCharOpt: upperCasedCharOpt
    };
    passOpOut = passOp
    return passOp;
}

var userPassword = ""
var passwordGroup = ""
var generatedPassword = ""
function genPassword() {
    options()

    if (passOpOut.lowerCasedCharOpt) {
        passwordGroup += lowerCasedChar;
    }
    if (passOpOut.upperCasedCharOpt) {
        passwordGroup += upperCasedChar;
    }
    if (passOpOut.numCharOpt) {
        passwordGroup += numChar;
    }
    if (passOpOut.specCharOpt) {
        passwordGroup += specChar;
    }
    for (let i = 0; i < passOpOut.passLength; i++) {
        userPassword += passwordGroup.charAt(
            Math.floor(Math.random() * passwordGroup.length)
        );
    }
    return userPassword;

}



var copyBtn = document.querySelector("#copy");
var generateBtn = document.querySelector("#generate");


function writePassword() {

    var password = genPassword();

    var passwordText = document.querySelector("#password");

    passwordText.innerHTML = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    var passwordText = document.querySelector("#password");

    passwordText.select();
    document.execCommand("copy");

    alert(
        "Your password " + passwordText.value + " was copied to your clipboard."
    );
}

generateBtn.addEventListener("click", writePassword);

copyBtn.addEventListener("click", copyToClipboard);