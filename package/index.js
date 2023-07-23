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

const validateExpirationDate = (date) => {
  // MM/YY or MM/YYYY
  const regex = /^(0[1-9]|1[0-2])\/((\d{2})|(\d{4}))$/;
  if (!regex.test(date)) {
    return false;
  }

  // Compare current date with the expiration date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the current year
  const currentMonth = currentDate.getMonth() + 1; // Months start from 0, so we add 1

  // Parse the expiration date parts
  const [inputMonth, inputYear] = date.split("/");
  const expirationYear = parseInt(inputYear);
  const expirationMonth = parseInt(inputMonth);

  // Validate the expiration date
  if (
    expirationYear < currentYear ||
    (expirationYear === currentYear && expirationMonth < currentMonth)
  ) {
    return false; // Card has expired
  }

  return true;
};

const validateSecurityCode = (code) => {
  // 3 or 4 digit number
  const regex = /^\d{3,4}$/;
  return regex.test(code);
};

module.exports = {
  validateCreditCardNumber,
  validateCardHolderName,
  validateExpirationDate,
  validateSecurityCode,
};
