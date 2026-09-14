const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Custom Logger Middleware
app.use(logger);

// Modular Routing
app.use('/students', studentRoutes);

// Handle Invalid Route (404)
app.use((req, res) => {
    res.status(404).json({ error: "Not Found: Invalid Route" });
});

// General Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
