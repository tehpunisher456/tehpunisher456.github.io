var specChar = [
    "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."
];

var numericCharacters = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var lowerCasedCharacters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

var upperCasedCharacters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

function options(){
    var passLength = parseInt(prompt(
        "Length of password? Must be a number between 8 and 128"
    ));

    if(isNaN(passLength) === true){
        alert("Must provide a number. Click generate password for new password");
        return;
    }else if(passLength < 8){
        alert("Must be at least 8 characters long");
        return;
    }else if(passLength > 128) {
        alert("Must be shorter than 128 characters")
    }

}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", options)