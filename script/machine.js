console.log("Machine.js is working...");

// Extracts user inputs from input fields.
function getValueFromInputField(id) {
  let inputValue = document.getElementById(id).value;
  return inputValue;
}

// Gets the current balance.
function getBalance() {
  let currentBalance = document.getElementById("balance").innerText;
  console.log(`Current Balance: ${currentBalance}`);
  return Number(currentBalance);
}

// Sets the new balance.
function setNewBalance(amount) {
  document.getElementById("balance").innerText = amount;
}
