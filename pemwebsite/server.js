const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname)));

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'tugas.html'));
});

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});