// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">Tentang IndraNews</h1>
            <div className="about-content">
                <p className="about-description">IndraNews adalah aplikasi berita terkini yang menyediakan informasi terpercaya dari berbagai sumber.</p>
                <p className="about-description">Kami berkomitmen untuk memberikan berita yang akurat dan terkini, dengan berfokus pada berbagai topik termasuk politik, ekonomi, olahraga, dan hiburan.</p>
                <p className="about-description">Dengan antarmuka yang mudah digunakan, Anda dapat dengan cepat menemukan berita yang relevan dan menarik.</p>
                <p className="about-description">Kami percaya bahwa informasi adalah kekuatan, dan tujuan kami adalah memberdayakan pengguna dengan berita yang informatif dan berimbang.</p>
                <p className="about-description">Untuk informasi lebih lanjut, silakan hubungi kami melalui <a href="/contact" className="about-link">halaman kontak</a>.</p>
            </div>
        </div>
    );
};

export default About;
