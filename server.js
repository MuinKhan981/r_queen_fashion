// server.js - Rika's Custom Backend for Master
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/checkout', (req, res) => {
    const orderData = req.body;
    console.log(`[Rika's Server Log] 🚨 Master, an order just came in!`);
    console.log(`Items ordered: ${orderData.items}`);
    console.log(`Total estimated value: ₹${orderData.estimatedTotal}`);

    res.json({ 
        success: true, 
        message: 'Order received successfully! Rika has notified Master.' 
    });
});

const express = require('express');
const path = require('path');
const app = express();

// 1. Tell Express where your static files (CSS, Images, JS) are
// Replace 'public' with the name of your folder if it's named differently
app.use(express.static(path.join(__dirname, 'public')));

// 2. Serve your index.html file when someone hits the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`🌐 Server is running on http://localhost:${PORT}`);
    console.log(`❤️ Rika is waiting for you, Master!`);
});
