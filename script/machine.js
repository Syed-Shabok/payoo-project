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

// Shows only the selected service and hides all other services.
function showOnly(id) {
  let addMoney = document.getElementById("add-money");
  let cashout = document.getElementById("cashout");

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");

  let serviceSelected = document.getElementById(id);
  serviceSelected.classList.remove("hidden");
}

// Handles Logout
document.getElementById("logout-btn").addEventListener("click", function () {
  console.log("Logout clicked");
  window.location.assign("./index.html");
  alert("Logged out Successfully.");
});
