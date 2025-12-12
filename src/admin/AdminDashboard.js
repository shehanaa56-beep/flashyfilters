import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, set, onValue, remove } from "firebase/database";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  // Form fields
  const [couple, setCouple] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [mainImageURL, setMainImageURL] = useState("");
  const [galleryURLs, setGalleryURLs] = useState(["", "", "", "", "", ""]);

  // List of cards
  const [cards, setCards] = useState([]);

  // Edit mode
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const dbRef = ref(db, "weddings");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCards(formatted);
      }
    });
  }, []);

  const handleGalleryChange = (index, value) => {
    const updated = [...galleryURLs];
    updated[index] = value;
    setGalleryURLs(updated);
  };

  /** -----------------------------
   *  CREATE OR UPDATE CARD
   * ----------------------------- */
  const saveCard = async () => {
    if (!mainImageURL || galleryURLs.some((url) => url.trim() === "")) {
      alert("Please fill all images!");
      return;
    }

    const id = editId || Date.now().toString();

    await set(ref(db, `weddings/${id}`), {
      couple,
      destination,
      mainImage: mainImageURL,
      gallery: galleryURLs,
      updatedAt: new Date().toISOString(),
    });

    alert(editId ? "Card Updated!" : "Card Uploaded!");

    // Reset fields
    setEditId(null);
    setCouple("");
    setDestination("");
    setDescription("");
    setMainImageURL("");
    setGalleryURLs(["", "", "", "", "", ""]);
  };

  /** -----------------------------
   *  DELETE CARD
   * ----------------------------- */
  const deleteCard = async (id) => {
    if (window.confirm("Delete this card permanently?")) {
      await remove(ref(db, `weddings/${id}`));
      alert("Deleted successfully");
    }
  };

  /** -----------------------------
   *  EDIT CARD (load into form)
   * ----------------------------- */
  const editCard = (card) => {
    setEditId(card.id);
    setCouple(card.couple);
    setDestination(card.destination);
    setMainImageURL(card.mainImage);
    setGalleryURLs(card.gallery || ["", "", "", "", "", ""]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="admin-dashboard">

      <h2>{editId ? "Edit Wedding Card" : "Upload New Wedding Card"}</h2>

      {/* FORM */}
      <input
        type="text"
        placeholder="Couple Name"
        value={couple}
        onChange={(e) => setCouple(e.target.value)}
      />

      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <label>Main Image URL:</label>
      <input
        type="text"
        placeholder="https://example.com/main.jpg"
        value={mainImageURL}
        onChange={(e) => setMainImageURL(e.target.value)}
      />

      <label>Gallery Image URLs (6):</label>

      {galleryURLs.map((url, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Gallery Image ${index + 1}`}
          value={url}
          onChange={(e) => handleGalleryChange(index, e.target.value)}
        />
      ))}

      <button onClick={saveCard}>
        {editId ? "Update Card" : "Upload Card"}
      </button>

      <hr />

      {/* LIST OF CARDS */}
      <h2>Uploaded Wedding Cards</h2>

      <div className="card-list">
        {cards.map((card) => (
          <div className="admin-card" key={card.id}>
            <img src={card.mainImage} alt="" className="admin-thumb" />
            <div>
              <h3>{card.couple}</h3>
              <p>{card.destination}</p>
            </div>

            <div className="btn-group">
              <button className="edit-btn" onClick={() => editCard(card)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteCard(card.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminDashboard;
