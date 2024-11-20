// src/pages/BeritaDetail.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BeritaDetail.css'; // Import the refined styles

const BeritaDetail = () => {
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
        <div className="berita-detail-container">
            {/* Article Title */}
            <h1 className="berita-title">{article.title}</h1>

            {/* Article Image */}
            <img
                src={article.image || 'https://via.placeholder.com/600x400?text=No+Image+Available'}
                alt={article.title}
                className="berita-image"
            />

            {/* Article Content */}
            <div className="berita-description">{article.description}</div>
            <div className="berita-content">{article.content}</div>

            {/* Link to the original article */}
            <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="berita-link"
            >
                Baca Artikel Asli
            </a>

            {/* Back Button */}
            <button className="back-button" onClick={() => navigate('/news')}>
                Kembali
            </button>
        </div>
    );
};

export default BeritaDetail;
