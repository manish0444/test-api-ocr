const express = require('express');
const app = express();
const PORT = 3000;

const medicineData = [
  {
    name: 'Paracetamol',
    price: 10,
    qty: 100,
    batchNo: 'A123',
    expiryDate: '2025-12-31'
  },
  {
    name: 'Amoxicillin',
    price: 15,
    qty: 50,
    batchNo: 'B456',
    expiryDate: '2024-11-15'
  }
];

app.get('/api/medicine', (req, res) => {
  res.json(medicineData);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
