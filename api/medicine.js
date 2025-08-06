export default function handler(req, res) {
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

  if (req.method === 'GET') {
    res.status(200).json(medicineData);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
