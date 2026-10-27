import React from 'react';
import '../style/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faYoutube,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer({ setPage }) {
  const socialMedia = [
    { id: 1, icon: faYoutube, link: 'https://youtube.com' },
    { id: 2, icon: faFacebookF, link: 'https://facebook.com' },
    { id: 3, icon: faInstagram, link: 'https://instagram.com' },
    { id: 4, icon: faGithub, link: 'https://github.com' },
    { id: 5, icon: faLinkedinIn, link: 'https://linkedin.com' },
  ];

  const go = (e, target) => {
    e.preventDefault();
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="wave">
        <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1A1A1A"
            fillOpacity="1"
            d="M0,32L80,53.3C160,75,320,117,480,117.3C640,117,800,75,960,58.7C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      <div className="fotter">
        <div className="logo">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
            >
              <FontAwesomeIcon icon={item.icon} className="social-icon" />
            </a>
          ))}
        </div>

        <div className="footer-links">
          <a href="#home" onClick={(e) => go(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => go(e, 'about')}>About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <p className="copyright">© 2026 Chitesh Kaushik. All rights reserved.</p>
      </div>
    </>
  );
}