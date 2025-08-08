// generateMedicines.js
const fs = require('fs');
const readline = require('readline');

// Predefined valid medicine names
const medicines = [
  "Paracetamol",
  "Ibuprofen",
  "Amoxicillin",
  "Metformin",
  "Omeprazole",
  "Cetirizine",
  "Aspirin",
  "Azithromycin",
  "Loratadine",
  "Diclofenac"
];

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get random integer in range
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to get random batch number
const randomBatch = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[randomInt(0, 25)] + randomInt(100, 999);
};

// Function to get random expiry date (up to 5 years from now)
const randomExpiryDate = () => {
  const today = new Date();
  today.setFullYear(today.getFullYear() + randomInt(1, 5));
  today.setMonth(randomInt(0, 11));
  today.setDate(randomInt(1, 28));
  return today.toISOString().split('T')[0];
};

// Ask user for N
rl.question("Enter number of medicine records to generate: ", (answer) => {
  const N = parseInt(answer);

  if (isNaN(N) || N <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  const data = [];

  for (let i = 0; i < N; i++) {
    const medicineName = medicines[randomInt(0, medicines.length - 1)] + "-" + randomInt(1, 999);
    data.push({
      name: medicineName,
      price: randomInt(5, 500),       // random price
      qty: randomInt(1, 500),         // random quantity
      batchNo: randomBatch(),
      expiryDate: randomExpiryDate()
    });
  }

  fs.writeFileSync('medicines.json', JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ Generated ${N} medicine records in medicines.json`);

  rl.close();
});
