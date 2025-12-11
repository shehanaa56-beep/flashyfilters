import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ post }) => {
  return (
    <motion.div
      className="blog-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-image-container">
        <img src={post.image} alt={post.title} className="card-image" />
        <div className="card-overlay">
          <h3 className="card-title">{post.title}</h3>
          <div className="card-meta">
            <span className="card-author">{post.author}</span>
            <span className="card-date">{post.date}</span>
          </div>
          <Link to={`/post/${post.id}`} className="card-link">
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
