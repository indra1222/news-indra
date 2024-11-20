// src/pages/Contact.js
import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="banner">
                <h1 className="banner-title">Hubungi Kami</h1>
            </div>
            <div className="contact-info">
                <p>
                    <FaEnvelope className="contact-icon" />
                    Email: <a href="mailto:indramauludani09@gmail.com">indramauludani09@gmail.com</a>
                </p>
                <p>
                    <FaPhone className="contact-icon" />
                    Telepon: <a href="tel:+6281312276720">0813-1227-6720</a>
                </p>
                <p>
                    <FaMapMarkerAlt className="contact-icon" />
                    Alamat: Garut, Indonesia
                </p>
            </div>

            <div className="social-media">
                <h2>Ikuti Kami</h2>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaTwitter />
                    </a>
                </div>
            </div>

            <p className="contact-thankyou">
                Terima kasih telah menghubungi kami. Kami akan segera merespon pertanyaan atau permintaan Anda!
            </p>
        </div>
    );
};

export default Contact;
