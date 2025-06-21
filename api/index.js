// api/index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
require('dotenv').config();
const NEWS_API_KEY = process.env.NEWS_API_KEY; 

app.use(cors());
app.use(express.json());

app.get('/news', async (req, res) => {
  try {
    const category = req.query.category || 'everything';
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${NEWS_API_KEY}`;
    const response = await axios.get(apiUrl);
    const articles = response.data.articles;
    res.json(articles);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
