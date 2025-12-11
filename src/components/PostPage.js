import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogPosts from '../data';

const PostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container">
        <h1>Post not found</h1>
      </div>
    );
  }

  return (
    <motion.article
      className="post-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="post-hero">
        <img src={post.image} alt={post.title} className="post-hero-image" />
        <div className="post-hero-overlay">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-author">By {post.author}</span>
            <span className="post-date">{post.date}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="author-bio">
          <div className="author-avatar">
            <img src={`https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face`} alt={post.author} />
          </div>
          <div className="author-info">
            <h3>{post.author}</h3>
            <p>Wedding photographer and storyteller passionate about capturing love stories.</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PostPage;
