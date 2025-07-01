import React, { useEffect, useState } from 'react';
import { FaDownload, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import '../Css/Sidebuttons.css';

const SideButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="download-btn-wrapper">
        <a href="" className="download-btn blink" target="_blank" rel="noopener noreferrer">
          <FaDownload className="icon" />
          <span className="text">Download</span>
        </a>
      </div>

      <div className="side-buttons">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp />
        </a>

        {showScroll && (
          <button
            className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </>
  );
};

export default SideButtons;
