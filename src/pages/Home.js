import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [newsImage, setNewsImage] = useState('');

    useEffect(() => {
        const fetchNewsImage = async () => {
            try {
                const apiKey = '0eAEKTpTukoAdiWAmW5BwrDGyM6dsM1BGA8rwk1TFoXHQ0iC';
                const response = await axios.get(`https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`);
                const news = response.data.news;

                // Extract an image URL (from the first news item for example)
                if (news && news.length > 0) {
                    const firstNewsItem = news[0];
                    const imageUrl = firstNewsItem.image || 'https://via.placeholder.com/400x300?text=Default+Image';
                    setNewsImage(imageUrl);
                } else {
                    setNewsImage('https://via.placeholder.com/400x300?text=Default+Image');
                }
            } catch (error) {
                console.error('Error fetching news image:', error);
                setNewsImage('https://via.placeholder.com/400x300?text=Default+Image');
            }
        };

        fetchNewsImage();
    }, []);

    return (
        <div className="home-container">
            <div className="overlay">
                <img src={newsImage} alt="News" className="news-image" />
                <h1 className="home-title">Selamat Datang di IndraNews</h1>
                <p className="home-description">Tetap terhubung dengan berita terkini dari berbagai sumber terpercaya.</p>
                <div className="button-container">
                    <Link to="/info" className="news-button">Lihat Berita</Link>
                    <Link to="/about" className="about-button">Tentang Kami</Link>
                    <Link to="/contact" className="contact-button">Hubungi Kami</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
