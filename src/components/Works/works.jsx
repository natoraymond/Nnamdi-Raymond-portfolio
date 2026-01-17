import React, { useState } from 'react';
import './works.css';

const Works = () => {
  const images = [
    { src: './src/assets/images/portfolio6.jpeg', link: 'https://covid19-tracker-app-natoraymond.vercel.app' },
    { src: './src/assets/images/fintech12s.jpeg', link: 'https://paylink-afrika.vercel.app' },
    { src: './src/assets/images/portfolio4.jpeg', link: 'https://student-agent-service.vercel.app' },
    { src: './src/assets/images/fitness1sa.jpeg', link: 'https://fitness-app-taupe-nine.vercel.app/' },

    { src: './src/assets/images/estate1sa.jpeg', link: 'https://student-agent-service.vercel.app' },
    { src: './src/assets/images/idcard1s.png', link: 'https://fitness-app-taupe-nine.vercel.app/' },
    { src: './src/assets/images/idcard1s.png', link: 'https://example.com/work6' },
    { src: './src/assets/images/portfolio3.jpeg', link: 'https://example.com/work3' },
    { src: './src/assets/images/portfolio4.jpeg', link: 'https://example.com/work4' },
    { src: './src/assets/images/portfolio5.jpeg', link: 'https://example.com/work5' },
    { src: './src/assets/images/portfolio6.jpeg', link: 'https://example.com/work6' },
    { src: './src/assets/images/portfolio1.jpeg', link: 'https://example.com/work1' },
    { src: './src/assets/images/portfolio2.jpeg', link: 'https://example.com/work2' },
    { src: './src/assets/images/portfolio3.jpeg', link: 'https://example.com/work3' },
    { src: './src/assets/images/portfolio4.jpeg', link: 'https://example.com/work4' },
    { src: './src/assets/images/portfolio5.jpeg', link: 'https://example.com/work5' },
    { src: './src/assets/images/portfolio6.jpeg', link: 'https://example.com/work6' },
  ];

  const INITIAL_VISIBLE = 4; // show 4 images first
  const LOAD_MORE_COUNT = 3; // show 3 more on each click

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleSeeMore = () => {
    setVisibleCount(prev => Math.min(prev + LOAD_MORE_COUNT, images.length));
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        A collection of real-world projects showcasing my ability to design and build responsive, user-friendly, and scalable web applications using modern frontend and backend technologies.
      </span>

      <div className="worksImgs">
        {images.slice(0, visibleCount).map((item, index) => (
          <button 
            key={index} 
            className="worksImgButton" 
            onClick={() => window.open(item.link, '_blank')}
          >
            <img src={item.src} alt={`Portfolio ${index + 1}`} className="worksImg" />
          </button>
        ))}
      </div>

      {visibleCount < images.length && (
        <button className="workBtn" onClick={handleSeeMore}>
          See More
        </button>
      )}
    </section>
  );
};

export default Works;



