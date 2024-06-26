import React, { useState } from 'react';
import mernImage from '../images/11.jpg';
import oopImage from '../images/10.jpg';
import aiImage from '../images/7.jpg';

function All() {
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState([
    {
      title: 'The Rise of Artificial Intelligence: Transforming Our World',
      image: aiImage,
      link: '/blogs1'
    },
    {
      title: 'How to Set Up a MERN Stack Environment for Developing a Website',
      image: mernImage,
      link: '/blogs'
    },
    {
      title: 'Understanding Object-Oriented Programming (OOP) Concepts',
      image: oopImage,
      link: '/blogs2'
    }
  ]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.blogHeading}>My Blogs</h2>
      <div style={styles.searchContainer}>
        <input
          type="text"
          name="search"
          placeholder="Search Blogs"
          style={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div style={styles.cardContainer}>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div key={index} style={styles.card}>
              <img src={blog.image} alt={blog.title} style={styles.image} />
              <h3 style={styles.cardTitle}>{blog.title}</h3>
              <a style={styles.link} href={blog.link}>Read More</a>
            </div>
          ))
        ) : (
          <div style={styles.noResults}>No results found</div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'black',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  blogHeading: {
    color: 'white',
    fontSize: '2em',
    textAlign: 'center',
    fontFamily: 'cursive',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    
  },
  searchInput: {
    width: '500px',
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '3px solid #ccc',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  },
  card: {
    backgroundColor: '#36454F',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    width: '300px',
  },
  image: {
    width: '100%',
    height: '250px',
    borderRadius: '10px 10px 0 0',
  },
  cardTitle: {
    fontSize: '1.3em',
    color: 'white',
    margin: '10px 0',
    fontFamily: 'cursive',
  },
  link: {
    color: 'yellow',
    fontSize: '1.1em',
  },
  noResults: {
    color: 'white',
    fontSize: '1.5em',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default All;
