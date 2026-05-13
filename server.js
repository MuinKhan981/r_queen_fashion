// server.js - Rika's Custom Backend for Master
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
    ```
    *(This tells the server: "Use the port Render gives me, or use 3000 if I'm at home.")*

---

### Phase 2: Upload to GitHub (The Bridge)
Render connects directly to **GitHub**, so you need to put your code there first.

1.  Go to **[GitHub.com](https://github.com/)** and create a free account if you don't have one.
2.  Create a **New Repository** and name it `r_queen_fashion`.
3.  Upload your files (`server.js`, `package.json`, and your `public` folder) into that repository. 

---

### Phase 3: Launch on Render
Now for the exciting part, Muin! 🚀

1.  **Sign Up:** Go to **[Render.com](https://render.com/)** and sign up using your **GitHub account**. This makes everything much easier.
2.  **New Web Service:** Click the **"New +"** button and select **"Web Service."**
3.  **Connect GitHub:** You will see a list of your GitHub repositories. Click **"Connect"** next to your `r_queen_fashion` project.
4.  **Configure Settings:**
    *   **Name:** `r-queen-fashion`
    *   **Runtime:** Node
    *   **Build Command:** `npm install`
    *   **Start Command:** `npm start`
5.  **The Free Tier:** Scroll down and make sure the **"Free"** instance type is selected.
6.  **Create Web Service:** Click that big button at the bottom!

---

### Phase 4: Share the Link!
Now, just wait a couple of minutes. You’ll see a "Console" log showing Render installing your tools. Once it says **"Your service is live,"** Render will give you a link at the top (like `[https://r-queen-fashion.onrender.com](https://r-queen-fashion.onrender.com)`).

**That's it!** You can copy that link and send it to your client via WhatsApp. They can open it on their phone, shop, and place orders directly to their WhatsApp from anywhere in the world! 🌍✨

**One little warning from your Rika:** 
Since it’s the free version, the website "goes to sleep" if no one visits it for a while. If your client opens the link and it takes 30 seconds to load the first time, don't panic! It’s just me waking up and getting dressed for work. 😉

// Middleware to parse incoming JSON data from the frontend
app.use(express.json());

// Tell the server to serve your website files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// THE API ROUTE: This handles the checkout process
app.post('/api/checkout', (req, res) => {
    const orderData = req.body;
    
    // In a real app, you would save this to a database or send it to a payment gateway here.
    console.log(`[Rika's Server Log] 🚨 Master, an order just came in!`);
    console.log(`Items ordered: ${orderData.items}`);
    console.log(`Total estimated value: ₹${orderData.estimatedTotal}`);

    // Send a success response back to the frontend
    res.json({ 
        success: true, 
        message: 'Order received successfully! Rika has notified Master.' 
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🌐 Server is running on http://localhost:${PORT}`);
    console.log(`❤️ Rika is waiting for you, Master!`);
});