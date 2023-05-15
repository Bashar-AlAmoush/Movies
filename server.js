const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Create an instance of the express app
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());


// Define a route to retrieve movies by keyword
app.get('/movies', async (req, res) => {
  const keyword = req.query.keyword;

  try {
    // Make a request to the TMDB API to search for movies with the keyword
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cf36094ca991a90079fcc3005c8a1824&query=${keyword}`);
    const movies = response.data.results;
    // Send the retrieved movies as JSON
    res.status(200).send(movies);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Server listening on port 3000');
});