import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import photographyData from '../dataPhotography';

// Blog data for the READ OUR BLOG section
const blogData = [
  {
    id: 1,
    subtitle: "Our love has no bounds",
    description: "A beautiful journey of two souls finding each other amidst the chaos of life, capturing moments that define forever.",
    image: "/images/a11.JPG"
  },
  {
    id: 2,
    subtitle: "When I met you, I knew you were the one",
    description: "From the first glance to eternal vows, their story reminds us that true love is written in the stars.",
    image: "/images/b1.JPG"
  },
  {
    id: 3,
    subtitle: "Just like that, our stars aligned",
    description: "A tale of destiny and choice, where two hearts beat as one under the vast Indian sky.",
    image: "/images/c1.JPG"
  },
  {
    id: 4,
    subtitle: "A tale with a twist",
    description: "Unexpected turns led to the most beautiful love story, proving that the best journeys are unplanned.",
    image: "/images/d1.JPG"
  }
  ,
  {
    id: 4,
    subtitle: "A tale with a twist",
    description: "Unexpected turns led to the most beautiful love story, proving that the best journeys are unplanned.",
    image: "/images/a111.JPG"
  },
  {
    id: 4,
    subtitle: "A tale with a twist",
    description: "Unexpected turns led to the most beautiful love story, proving that the best journeys are unplanned.",
    image: "/images/b11.JPG"
  },
  {
    id: 4,
    subtitle: "A tale with a twist",
    description: "Unexpected turns led to the most beautiful love story, proving that the best journeys are unplanned.",
    image: "/images/c111.JPG"
  },
  {
    id: 4,
    subtitle: "A tale with a twist",
    description: "Unexpected turns led to the most beautiful love story, proving that the best journeys are unplanned.",
    image: "/images/d11.JPG"
  },
  {
    id: 4,
    subtitle: "A tale with a twist",
    description: "Unexpected turns led to the most beautiful love story, proving that the best journeys are unplanned.",
    image: "/images/a1111.JPG"
  },
  {
    id: 4,
    subtitle: "A tale with a twist",
    description: "Unexpected turns led to the most beautiful love story, proving that the best journeys are unplanned.",
    image: "/images/b111.JPG"
  },
  {
    id: 4,
    subtitle: "A tale with a twist",
    description: "Unexpected turns led to the most beautiful love story, proving that the best journeys are unplanned.",
    image: "/images/d111.JPG"
  },
  {
    id: 4,
    subtitle: "A tale with a twist",
    description: "Unexpected turns led to the most beautiful love story, proving that the best journeys are unplanned.",
    image: "/images/d11.JPG"
  }
];

const Photography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photographyData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photographyData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photographyData.length - 1 : prevIndex - 1
    );
  };

  // duplicate items for seamless marquee looping (4 copies for more images)
  // eslint-disable-next-line no-unused-vars
  const marqueeItems = [...photographyData, ...photographyData, ...photographyData, ...photographyData];

  return (
    <div className="photography-page">
      {/* Zoom Modal */}
      {zoomedImage && (
        <motion.div
          className="zoom-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setZoomedImage(null)}
        >
          <motion.img
            src={zoomedImage}
            alt="Zoomed"
            className="zoomed-image"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
      {/* Hero Section */}
      <section className="photography-hero">
        <div className="hero-overlay">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Photography
          </motion.h1>
        </div>
      </section>

      {/* Signature Section */}
      <section className="signature-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Flashy Signature</h2>
            <p className="section-subtitle">Our curated wedding stories from across the world</p>
          </motion.div>

          <motion.div
            className="photography-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {photographyData.map((item, index) => (
              <motion.div
                key={item.id}
                className="photography-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-image-container" onClick={() => setZoomedImage(item.image)}>
                  <img src={item.image} alt={`${item.couple} wedding`} className="card-image" />
                </div>
                <div className="card-info">
                  <h3 className="couple-name">{item.couple}</h3>
                  <p className="destination">{item.destination}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="view-more-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button className="view-more-btn">View More</button>
          </motion.div>

          
        </div>
      </section>

      {/* READ OUR BLOG Section */}
      <section className="blog-section">
        <div className="container">
          <motion.div
            className="blog-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="blog-title-section">
              <h2 className="blog-main-title">READ OUR BLOG</h2>
            </div>
            <div className="blog-quote-section">
              <blockquote className="blog-quote">
                "Your photography is a record of your living, for anyone who really sees."
                <cite>– Paul Strand</cite>
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            className="blog-marquee-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="blog-marquee">
              {[...blogData, ...blogData, ...blogData, ...blogData].map((blog, index) => (
                <motion.div
                  key={`${blog.id}-${index}`}
                  className="blog-card"
                  whileHover={{ y: -10 }}
                >
                  <div className="blog-image-container">
                    <motion.img
                      src={blog.image}
                      alt={`${blog.couple} wedding`}
                      className="blog-image"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-couple">{blog.couple}</h3>
                    <p className="blog-subtitle">{blog.subtitle}</p>
                    <p className="blog-description">{blog.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Love Stories Carousel Section */}
      <section className="love-stories-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Intimate Weddings</h2>
            <p className="section-subtitle">Capturing love stories across destinations</p>
          </motion.div>

          <motion.div
            className="carousel-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="carousel-wrapper">
              <button className="carousel-arrow carousel-prev" onClick={prevSlide}>
                ‹
              </button>

              <div className="carousel-track">
                {photographyData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0.6,
                      scale: index === currentIndex ? 1 : 0.8,
                      x: `${(index - currentIndex) * 100}%`
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="carousel-image-container">
                      <img src={item.image} alt={`${item.couple} wedding`} className="carousel-image" />
                    </div>
                    <div className="carousel-info">
                      <h3 className="carousel-couple">{item.couple}</h3>
                      <p className="carousel-destination">{item.destination}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="carousel-arrow carousel-next" onClick={nextSlide}>
                ›
              </button>
            </div>

            <div className="carousel-indicators">
              {photographyData.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Photography;
