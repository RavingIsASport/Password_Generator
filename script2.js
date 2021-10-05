// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    special: '!@#$%&*()<>{}[]'
};

// password function
function generatePassword() {
    // Prompt Q's
    // Character Length
    var charLength = prompt("Length of Password? Between 8-128 characters.");
    if (charLength >= 8 && charLength <= 128) {
        
    }
    else {
        return alert('Must be 8-128 characters')
    };
    console.log(charLength);

    // Value's of Q's
    var confirmVal = "";
    //Character Q's
    var upperCase = window.confirm("Include uppercase letters?");
    if (upperCase) {
        confirmVal += characters.uppercase;
    };
    var lowerCase = window.confirm("Include lowercase letters?");
    if (lowerCase) {
        confirmVal += characters.lowercase;
    };
    var numbers = window.confirm("Include numbers?");
    if (numbers) {
        confirmVal += characters.number;
    };
    var speacialChar = window.confirm("Include special characters?");
    if (speacialChar) {
        confirmVal += characters.special;
    };
    if (upperCase != true && lowerCase != true &&
        numbers != true && speacialChar != true) {
        return alert('Choose at least 1 option to generate.');
    };
    console.log(confirmVal)
    
    // Password created
    var yourPass = '';
    for ( var i = 0; i < charLength; i++){
        var random = confirmVal[Math.floor(Math.random() * confirmVal.length)]
        yourPass += random;
    };
    return yourPass;
    console.log(yourPass);
}