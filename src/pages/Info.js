// src/pages/Info.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Info.css';

const Info = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const apiKey = '0eAEKTpTukoAdiWAmW5BwrDGyM6dsM1BGA8rwk1TFoXHQ0iC';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`);
                setNews(response.data.news || []);
            } catch (err) {
                setError(err.response?.data?.message || 'Error fetching news');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [apiKey]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    const handleArticleClick = (article) => {
        navigate(`/article/${article.title}`, { state: { article } });
    };

    return (
        <div className="info-container">
            <h1 className="info-title">Informasi Berita Terkini</h1>
            {news.slice(0, 7).map((article, index) => (
                <div key={index} className="info-card" onClick={() => handleArticleClick(article)}>
                    <h2 className="info-card-title">{article.title}</h2>
                    <img
                        src={article.image || 'https://via.placeholder.com/600x400?text=No+Image+Available'}
                        alt={article.title}
                        className="info-image"
                    />
                    <p className="info-card-description">{article.description || article.snippet}</p>
                    <span className="read-more">Baca Selengkapnya</span>
                </div>
            ))}
            {news.length === 0 && <p>No articles available</p>}
        </div>
    );
};

export default Info;
