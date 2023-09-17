const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;
const FLASK_SERVER_URL = 'http://127.0.0.1:5000/ask';

// Middleware to parse POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Endpoint to get a response from the Flask server
app.post('/get-response', async (req, res) => {
    try {
        const user_input = req.body.user_input;
        const response = await axios.post(FLASK_SERVER_URL, { user_input });
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Error connecting to the Flask server");
    }
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
