// src/pages/NewsDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './NewsDetail.css';

const NewsDetail = () => {
    const { id } = useParams();  // Use the ID from the URL
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const apiKey = '0eAEKTpTukoAdiWAmW5BwrDGyM6dsM1BGA8rwk1TFoXHQ0iC';

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(`https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`);
                const newsData = response.data.news;

                // Limit to 2 articles in total
                const limitedArticles = newsData.slice(0, 2); // Take only the first 2 articles
                setArticles(limitedArticles);
            } catch (err) {
                setError('Gagal memuat detail berita.');
            } finally {
                setLoading(false);
            }
        };

        fetchDetail();
    }, []);

    if (loading) return <div className="loading">Memuat...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="news-detail-container">
            <div className="news-detail-overlay">
                {/* Display Articles (Only 2 articles in total) */}
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <div key={index} className="news-card">
                            <h3 className="news-card-title">{article.title}</h3>
                            {article.image && <img src={article.image} alt={article.title} className="news-detail-image" />}
                            <p className="news-card-content">{article.description}</p>

                            {/* Passing article data through Link to the detail page */}
                            <Link
                                to={`/berita/${article.id}`}
                                state={{ article }}
                                className="news-detail-link"
                            >
                                Baca Selengkapnya
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Berita tidak ditemukan.</p>
                )}
            </div>
        </div>
    );
};

export default NewsDetail;
