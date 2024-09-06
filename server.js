const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files (HTML, CSS, JS)

// API endpoint to handle form submission
app.post("/submit-form", (req, res) => {
    const { name, email, message } = req.body;

    // You can extend this part to save the form data to a database, etc.
    console.log("Form Data Received: ", { name, email, message });

    // Send a response back to the front-end
    res.json({ message: "Thank you for reaching out! We'll get back to you soon." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
