// src/NewsCard.js
import React from 'react';

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="news-card">
      <img src={urlToImage} alt={title} className="news-image" />
      <div className="news-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
