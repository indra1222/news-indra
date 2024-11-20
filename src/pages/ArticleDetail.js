// src/pages/ArticleDetail.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ArticleDetail.css';

const ArticleDetail = () => {
    const location = useLocation();  // Use to access state passed by Link
    const article = location.state?.article; // Access article from state passed via Link
    const navigate = useNavigate();

    // Debugging: Check if the article data is available
    console.log('Article Data:', article);

    // If no article data is found, redirect to the news page
    if (!article) {
        navigate('/news');
        return null;
    }

    return (
        <div className="article-detail-container">
            <h1 className="article-detail-title">{article.title}</h1>
            <img
                src={article.image || 'https://via.placeholder.com/600x400?text=No+Image+Available'}
                alt={article.title}
                className="article-detail-image"
            />
            <p className="article-detail-content">{article.content || article.description}</p>

            {/* Link to the original article */}
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="original-article-link">
                Read the original article
            </a>

            {/* Back button */}
            <button className="back-button" onClick={() => navigate('/news')}>
                Go Back
            </button>
        </div>
    );
};

export default ArticleDetail;
