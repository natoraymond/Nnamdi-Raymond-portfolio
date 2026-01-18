import React, { useState } from 'react';
import './intro.css';

const Intro = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenCV = () => setShowModal(true);
  const handleCloseCV = () => setShowModal(false);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Nnamdi</span><br />Software Engineer
        </span>
        <p className="introPara">
          I am a skilled web developer with experience creating visually appealing and user-friendly websites.
        </p>

        {/* Hire Me Button */}
        <button className="btn" onClick={handleOpenCV}>
          <img src="/images/hire-me.jpeg" alt="hire me" className='btnImg' />
          Hire Me
        </button>
      </div>

      <img src="/images/pic1.jpeg" alt="pic" className="bg" />

      {/* Modal for CV Preview */}
      {showModal && (
        <div className="cvModal">
          <div className="cvModalContent">
            <button className="closeBtn" onClick={handleCloseCV}>X</button>
            <iframe
              // src="/files/Nnamdi Cv Pdf.pdf"  // My PDF is in public/files/
               src="/files//NNAMDI CV Prog-2026.doc"
              title="Nnamdi Nnadi CV"
              className="cvFrame"
            ></iframe>
            {/* <a href="./public/NNAMDI CV Prog-2026.doc" download="NNAMDI CV Prog-2026.doc"> */}
                <a href="/NNAMDI CV Prog-2026.doc" download="NNAMDI CV Prog-2026.doc">
                <button className="btn downloadBtn">Download CV</button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;

