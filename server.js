const express = require('express'); // Import the express module
const app = express(); // Create an instance of an Express application
const PORT = 3000; // Define the port number where the server will listen

// Serve static files (like HTML, CSS, JavaScript) from the "public" directory
app.use(express.static('public'));

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Welcome to My Website using Express!'); // Send a response to the client
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

