import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import blogPosts from '../data';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredPosts = blogPosts.slice(0, 3); // First 3 posts for carousel

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [featuredPosts.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredPosts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel-slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${featuredPosts[currentIndex].image})`
            }}
          >
            <div className="carousel-overlay">
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="carousel-arrow carousel-prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-arrow carousel-next" onClick={nextSlide}>
          ›
        </button>

        <div className="carousel-indicators">
          {featuredPosts.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
