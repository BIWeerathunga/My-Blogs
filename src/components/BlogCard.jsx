// src/components/BlogCard.js

import React from 'react';

const BlogCard = ({ title, description, image }) => {
  return (
    <div style={styles.card}>
      <img src={require(image)} alt={title} style={styles.image} />
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDescription}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    width: '300px',
  },
  image: {
    width: '100%',
    borderRadius: '10px 10px 0 0',
  },
  cardTitle: {
    fontSize: '1.5em',
    margin: '10px 0',
    fontFamily: 'cursive',
  },
  cardDescription: {
    fontSize: '1em',
    color: '#333',
    fontFamily: 'cursive',
  },
};

export default BlogCard;
