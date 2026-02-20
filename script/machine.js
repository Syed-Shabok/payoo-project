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
  let transactions = document.getElementById("transactions");
  let transferMoney = document.getElementById("transfer-money");
  let getBonus = document.getElementById("get-bonus");
  let payBill = document.getElementById("pay-bill");

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transactions.classList.add("hidden");
  transferMoney.classList.add("hidden");
  getBonus.classList.add("hidden");
  payBill.classList.add("hidden");

  let serviceSelected = document.getElementById(id);
  serviceSelected.classList.remove("hidden");
}

// Adds New Transaction to Transaction History.
function addTransaction(type, imgType, amount) {
  let transactionContainer = document.getElementById("transactions");

  let newTransaction = document.createElement("div");
  let currentDate = new Date();
  let formattedDate = currentDate.toLocaleDateString("en-GB");

  newTransaction.innerHTML = `
  <div id="transaction-card" class="bg-base-100 px-4 py-3 rounded-md flex items-center justify-start gap-3">
        <div class="bg-base-300 p-3 rounded-full">
          <img src="./assets/opt-${imgType}.png" alt="${type} icon">
        </div>
        
        <div>
          <h3 class="font-bold">${type}</h3>
          <p class="text-sm text-neutral/60">$${amount} on ${formattedDate}</p>
        </div>
      </div>`;

  transactionContainer.appendChild(newTransaction);

  console.log("addTransaction() has run");
}

// Handles Logout
document.getElementById("logout-btn").addEventListener("click", function () {
  console.log("Logout clicked");
  window.location.assign("./index.html");
  alert("Logged out Successfully.");
});
