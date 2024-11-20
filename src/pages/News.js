// src/pages/News.js
import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const newsData = [
    {
        id: 1,
        title: "BERITA TERBARU",
        content: "Informasi Berita terbaru yang sedang hangat"
    },
    // Tambahkan berita lainnya di sini
];

const News = () => {
    return (
        <div className="news-container">
            <h1 className="news-title"></h1>
            {newsData.map(article => (
                <div key={article.id} className="news-card">
                    <Link to={`/news/${article.id}`} className="news-link">
                        <h2 className="news-card-title">{article.title}</h2>
                    </Link>
                    <p className="news-card-content">{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default News;
