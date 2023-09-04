const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./src/Routes/api'); // Assuming you have an 'api.js' file in the 'Routes' folder

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use the API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
