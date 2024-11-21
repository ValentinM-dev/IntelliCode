import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
      <div className="social-icons">
          <a href="https://www.facebook.com" className="icon facebook" aria-label="Facebook"></a>
          <a href="https://www.instagram.com" className="icon instagram" aria-label="Instagram"></a>
          <a href="https://www.twitter.com" className="icon twitter" aria-label="Twitter"></a>
          <a href="https://www.linkedin.com" className="icon linkedin" aria-label="LinkedIn"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
