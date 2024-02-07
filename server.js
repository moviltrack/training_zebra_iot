const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use Morgan for logging in the 'tiny' configuration
app.use(morgan('tiny'));

// Route that logs any incoming message
app.post('/', (req, res) => {
    console.log("Received message: ");
    console.log(JSON.stringify(req.body, null, 2)); // Pretty print the JSON body
    res.status(200).send('Message received');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
