console.log("cashout.js is working...");

// Handles Cashout Service.
document.getElementById("cashout-btn").addEventListener("click", function () {
  let agentNumber = getValueFromInputField("cashout-number");

  let amount = getValueFromInputField("cashout-amount");

  let newBalance = getBalance() - Number(amount);

  let pinEntered = getValueFromInputField("cashout-pin");

  if (pinEntered === "1234") {
    alert(`Cashout of ${amount} taka successful at ${new Date()};`);
    setNewBalance(newBalance);
  } else {
    alert("Invalid pin");
  }
});
