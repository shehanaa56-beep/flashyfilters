import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import photographyData from "../dataa";
import "./PhotoPage.css";

import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const PhotoPage = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [firebaseCards, setFirebaseCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dbRef = ref(db, "weddings");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setFirebaseCards(formatted);
      }
    });
  }, []);

  return (
    <section className="signature-section">
      <div className="container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Flashy Signature</h2>
          <p className="section-subtitle">
            Our curated wedding stories from across the world
          </p>
        </motion.div>

        {/* ------------------------------------------------ */}
        {/* 🔥 YOUR UPDATED GRID SECTION (NO OTHER CHANGES) */}
        {/* ------------------------------------------------ */}

        <motion.div
          className="photography-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          {/* 🔥 Show Firebase uploaded cards */}
          {firebaseCards.map((item, index) => (
            <motion.div
              key={`fb-${item.id}`}
              className="photography-card"
              onClick={() => navigate(`/photos/${item.id}`)}
            >
              <div className="card-image-container">
                <img src={item.mainImage} alt={item.couple} className="card-image" />
              </div>

              <div className="card-info">
                <h3 className="couple-name">{item.couple}</h3>
                <p className="destination">{item.destination}</p>
              </div>
            </motion.div>
          ))}

          {/* 🔥 Show static demo cards */}
          {photographyData.map((item, index) => (
            <motion.div
              key={`static-${index}-${item.id}`}
              className="photography-card"
              onClick={() => navigate(`/photos/${item.id}`)}
            >
              <div className="card-image-container">
                <img src={item.image} alt={item.couple} className="card-image" />
              </div>

              <div className="card-info">
                <h3 className="couple-name">{item.couple}</h3>
                <p className="destination">{item.destination}</p>
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* ------------------------------------------------ */}

        <motion.div
          className="view-more-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button className="view-more-btn">View More</button>
        </motion.div>

        {zoomedImage && (
          <div className="zoom-modal" onClick={() => setZoomedImage(null)}>
            <motion.img
              src={zoomedImage}
              alt="Zoomed wedding"
              className="zoomed-image"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoPage;
