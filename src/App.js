import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Info from './pages/Info';
import Contact from './pages/Contact';
import About from './pages/About';
import ArticleDetail from './pages/ArticleDetail'; // Import ArticleDetail
import BeritaDetail from './pages/BeritaDetail'; // Import BeritaDetail
import './App.css'; // Import CSS for splash screen styling

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time for splash screen
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide splash screen after 3 seconds
        }, 3000);

        return () => clearTimeout(timer); // Clear timer on unmount
    }, []);

    if (isLoading) {
        return (
            <div className="splash-screen">
                <img src="/logo192.png" alt="Splash Screen" className="splash-image" />
            </div>
        );
    }

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} /> {/* Route for individual news details */}
                <Route path="/info" element={<Info />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/article/:id" element={<ArticleDetail />} /> {/* Route for article detail */}
                <Route path="/berita/:id" element={<BeritaDetail />} /> {/* Route for berita detail */}
            </Routes>
        </Router>
    );
};

export default App;
