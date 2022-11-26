//create object to store inputed data
let userDetailsDatabase = {};

//to make sure user keeps getting prompted when an input is not valid (using loop)
function getUserDetail() {
  //to set up an alert bar(prompt) requesting for username once a user reloads the page or clicks the button
  let userName = prompt("Enter your username");

  //to terminate filling of input if a user doesnt put in an input or if a user clicks on cancel without filling an input
  if (userName == null) {
    return;
  }

  //setting the requirements for the username(validating) using conditionals
  function validateUserName(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  while (validateUserName(userName) == false) {
    userName = prompt("Username must be less than 10 and greater than 0");
  }

  //to store the data(username) inputed by the user in the object we created

  userDetailsDatabase["userName"] = userName;

  //console.log(userDetailsDatabase);

  //validating the username using console.log with the function
  // console.log(validateUserName(userName));

  //setting a prompt for email address
  let email = prompt("Enter your email address");
  if (email == null) {
    return;
  }
  //validating the email address
  function validateEmail(email) {
    const emailCheck =
      //assign standard code for checking email to the constant emailCheck
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;

    //test your validation to see if it works, returns true if email is valid and false if it isnt
    emailCheckResult = emailCheck.test(email);

    //setting conditionals that depend on the validation test result
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }
  while (validateEmail(email) == false) {
    email = prompt("Enter a valid email");
  }

  userDetailsDatabase["email"] = email;

  // console.log(validateEmail(email));

  //setting a prompt for phone number

  let phoneNumber = prompt("Enter your phone number");
  if (phoneNumber == null) {
    return;
  }
  //validating the phone number
  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Phone number must be 11 digits, try again!");
  }

  userDetailsDatabase["phoneNumber"] = phoneNumber;

  //console.log(validatePhoneNumber(phoneNumber));

  //setting a prompt for password
  let password = prompt("Enter your password");
  if (password == null) {
    return;
  }
  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  while (validatePassword(password) == false) {
    password = prompt("Password must not be less than 6 digits");
  }
  //console.log(validatePassword(password));

  let confirmPassword = prompt("Confirm your password");
  if (confirmPassword == null) {
    return;
  }
  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }
  if (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt(
      "Confirm password does not match password, try again"
    );
  }
  // console.log(validateConfirmPassword(confirmPassword));
}

function displayUserDetails() {
  alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}\n
    Phone number: ${userDetailsDatabase.phoneNumber}\n
    Email: ${userDetailsDatabase.email}`);
}

//dont call multiple functions in a function, call them outside the main function then invoke them in the main function.
