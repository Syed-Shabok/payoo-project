console.log("addMoney.js is connected...");

document.getElementById("add-money-btn").addEventListener("click", function () {
  let bankName = getValueFromInputField("add-money-bank");

  if (bankName === "Select Bank") {
    alert("Please select a Bank.");
    return;
  }
  console.log(`Bank name is: ${bankName}`);

  let accNumber = getValueFromInputField("add-money-number");
  console.log(`Account Number is: ${accNumber}`);

  let amount = getValueFromInputField("add-money-amount");
  console.log(`Amount to add: ${typeof amount}`);

  let newBalance = getBalance() + Number(amount);
  console.log(`New Balance: ${newBalance}`);

  let pinEntered = getValueFromInputField("add-money-pin");
  console.log(`Pin entered: ${pinEntered}`);

  if (pinEntered === "1234") {
    alert(`Money Added Successfully from ${bankName} at ${new Date()}`);
    setNewBalance(newBalance);
  } else {
    alert("Invalid pin");
    return;
  }
});
