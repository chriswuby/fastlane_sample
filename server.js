const express = require ('express');
const apiRoutes = require('./api.js'); // Require the api.js file

const app = express();
const PORT = process.env.PORT || 3004;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Mount the api.js routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});