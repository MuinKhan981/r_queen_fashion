const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. Middleware
// This tells Express to look for your CSS/Images in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); 

// 2. Routes
// Serve your index.html file for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Your checkout route
app.post('/api/checkout', (req, res) => {
    // Your checkout logic here
    res.json({ message: "Checkout successful!" });
});

// 3. Start the server (Only ONE listener!)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
