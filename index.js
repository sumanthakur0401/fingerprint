const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/verify', (req, res) => {
  const credential = req.body.credential;

  // Perform server-side verification of the credential
  // This is where you would validate the fingerprint against your system

  // If verification is successful, respond with a success message
  res.json({ success: true });

  // If verification fails, respond with an error message
  // res.status(401).json({ success: false, error: 'Invalid credential' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
