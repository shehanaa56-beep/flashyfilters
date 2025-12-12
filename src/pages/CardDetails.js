import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import photographyData from "../dataa";
import "./DetailsPage.css";

import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const CardDetails = () => {
  const { id } = useParams();
  const [firebaseCard, setFirebaseCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(db, `weddings/${id}`);

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFirebaseCard({ id, ...data });
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  // 🔥 Firebase version (if exists)
  if (firebaseCard)
    return (
      <div className="details-page">
        <img
          src={firebaseCard.mainImage}
          alt={firebaseCard.couple}
          className="details-image"
        />

        <h1 className="details-title">{firebaseCard.couple}</h1>
        <p className="details-destination">{firebaseCard.destination}</p>

        <p className="details-description">
          {firebaseCard.description || "More details coming soon..."}
        </p>

        {firebaseCard.gallery && firebaseCard.gallery.length > 0 && (
          <div className="scroll-gallery">
            {firebaseCard.gallery.map((img, index) => (
              <img
                key={`${index}-${img}`}  // unique key
                src={img}
                alt=""
                className="scroll-image"
              />
            ))}
          </div>
        )}
      </div>
    );

  // 🔥 Static fallback data
  const staticCard = photographyData.find((item) => item.id === parseInt(id));
  if (!staticCard) return <h2>Card not found!</h2>;

  return (
    <div className="details-page">
      <img
        src={staticCard.image}
        alt={staticCard.couple}
        className="details-image"
      />

      <h1 className="details-title">{staticCard.couple}</h1>
      <p className="details-destination">{staticCard.destination}</p>

      <p className="details-description">
        {staticCard.description || "More details coming soon..."}
      </p>

      {staticCard.gallery && staticCard.gallery.length > 0 && (
        <div className="scroll-gallery">
          {staticCard.gallery.map((img, index) => (
            <img
              key={`${index}-${img}`}  // unique key
              src={img}
              alt=""
              className="scroll-image"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDetails;
