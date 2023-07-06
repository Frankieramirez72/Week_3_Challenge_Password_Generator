// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password based on user-selected criteria
function generatePassword() {
  var passwordLength = prompt("Choose a password length (between 8 and 128 characters):");

  // Validate password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid length! Please choose a password length between 8 and 128 characters:");
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type!");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  // Generate the password based on selected criteria
  var password = generateRandomPassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  return password;
}

// Generate random password based on selected criteria
function generateRandomPassword(length, lowercase, uppercase, numeric, special) {
  // Implement your own password generation logic here
  // Generate a random password based on the given length and criteria
  // Generate random password based on selected criteria
function generateRandomPassword(length, lowercase, uppercase, numeric, special) {
  var characterSet = "";
  var password = "";

  if (lowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numeric) characterSet += "0123456789";
  if (special) characterSet += "!@#$%^&*()";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}

  // Return the generated password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
