console.log("Login.js is working...");

// Handles User Login.
document.getElementById("login-btn").addEventListener("click", function () {
  let customerNumber = getValueFromInputField("input-number");
  console.log(`Customer number is: ${customerNumber}`);

  let customerPin = getValueFromInputField("input-pin");
  console.log(`Customer Pin is: ${customerPin}`);

  if (customerNumber === "01234567890" && customerPin === "1234") {
    window.location.assign("./home.html");
    alert("Login Successful.");
  } else {
    alert("Login Failed.");
  }
});
