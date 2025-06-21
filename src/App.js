import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './component/Cards/newsCard';
import './App.css';

const App = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/news?category=${selectedCategory}`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };

    fetchNews();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFetchNews = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/news?category=${selectedCategory}`);
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error.message);
    }
  };

  return (
    <div className="app">
      <h1>News Aggregator</h1>
      <label htmlFor="category">Select a category:</label>
      <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        {/* Add more categories as needed */}
      </select>
      <button id="fetch-news-btn" onClick={handleFetchNews}>
        Fetch News
      </button>
      <div className="news-container">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default App;
