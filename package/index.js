const validateCreditCardNumber = (input) => {
  // Convert card number to numerical range (array)
  let creditCardInt = input.split("").map(Number);

  // Implement Luhn Algorithm
  // Product each digit with 2 starting from the end
  for (let i = creditCardInt.length - 2; i >= 0; i = i - 2) {
    let tempValue = creditCardInt[i];
    tempValue = tempValue * 2; // Product chosen digit with 2

    if (tempValue > 9) {
      tempValue = (tempValue % 10) + 1;
    }

    creditCardInt[i] = tempValue;
  }

  // Calculate the total of each digits
  let total = 0;
  for (let i = 0; i < creditCardInt.length; i++) {
    total += creditCardInt[i];
  }

  // Check if the card number is valid
  return total % 10 === 0;
};

const validateCardHolderName = (name) => {
  // Card holder name should not be empty and should only contain letters and spaces
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(name);
};

module.exports = { validateCreditCardNumber, validateCardHolderName };
