require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/images', (req, res) => {
  res.json([
    { url: 'https://source.unsplash.com/800x600/?nature,forest', text: 'Breathe in the calm.' },
    { url: 'https://source.unsplash.com/800x600/?nature,mountain', text: 'Let the peaks clear your mind.' },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
