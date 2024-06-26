/*import React from 'react';
import Slideshow from '../components/slideshow';

function Home() {
  return (
    <div style={styles.container}>
  
      <div style={styles.content}>
        <div style={styles.description}>
          <h2 style={styles.heading}>Welcome to </h2><h2 style={styles.heading2}>TechCafe</h2>
          <p style={styles.paragraph}>
             Our blog is dedicated to bringing you the latest news, insights, and trends in the ever-evolving world of technology. Whether you're a seasoned tech enthusiast or just beginning to explore the digital landscape, our comprehensive articles, reviews, and guides are designed to inform, inspire, and empower you.
          </p>
          <button style={styles.button}>Read Blogs</button>
      
        </div>
        <div style={styles.slideshow}>
          <Slideshow />
        </div>

      </div>
      <h2>My Blogs</h2>
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
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: '20px',
    color: 'white',
  },
  description: {
    width: '50%', // Adjust width as needed
    paddingRight: '20px',
  },
  heading: {
    fontSize: '5em',
    marginBottom: '20px',
    fontFamily: 'cursive',

  },
  heading2: {
    fontSize: '5em',
    marginTop: '11px',
    fontFamily: 'cursive',
    color: 'yellow',
  },
  
  
  paragraph: {
    fontSize: '1.4em',
    lineHeight: '1.6',
    marginTop: '-17px',
    fontFamily: 'cursive',

  },
 
  slideshow: {
    marginLeft: 'auto',
    width: '50%', // Adjust width as needed
  },
  button: {
    borderRadius: '12px',
    backgroundColor: 'white', /* Green 
    border: 'none',
    color: 'black',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    marginLeft:'300px',
    fontSize: '16px',
    margin: '4px 2px',
    cursor:'pointer',
  }
  
};

export default Home;*/

// src/pages/Home.js

/*import React from 'react';
import Slideshow from '../components/slideshow';
import BlogCard from '../components/BlogCard';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.description}>
          <h2 style={styles.heading}>Welcome to </h2><h2 style={styles.heading2}>TechCafe</h2>
          <p style={styles.paragraph}>
            Our blog is dedicated to bringing you the latest news, insights, and trends in the ever-evolving world of technology. Whether you're a seasoned tech enthusiast or just beginning to explore the digital landscape, our comprehensive articles, reviews, and guides are designed to inform, inspire, and empower you.
          </p>
          <button style={styles.button}>Read Blogs</button>
        </div>
        <div style={styles.slideshow}>
          <Slideshow />
        </div>
      </div>
      <h2 style={styles.blogHeading}>My Blogs</h2>
      <div style={styles.cardContainer}>
        <BlogCard
          title="How to Set Up a MERN Stack Environment for Developing a Website"
          description="This is a brief description of Blog Post 1."
          image="../images/MERN.jpg"
        />
        <BlogCard
          title="Understanding Object-Oriented Programming (OOP) Concepts"
          description="This is a brief description of Blog Post 2."
          image="../images/6.jpg"
        />
        <BlogCard
          title="The Rise of Artificial Intelligence: Transforming Our World"
          description="This is a brief description of Blog Post 3."
          image="../images/7.jpg"
        />
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
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: '20px',
    color: 'white',
  },
  description: {
    width: '50%', // Adjust width as needed
    paddingRight: '20px',
  },
  heading: {
    fontSize: '5em',
    marginBottom: '20px',
    fontFamily: 'cursive',
  },
  heading2: {
    fontSize: '5em',
    marginTop: '11px',
    fontFamily: 'cursive',
    color: 'yellow',
  },
  paragraph: {
    fontSize: '1.4em',
    lineHeight: '1.6',
    marginTop: '-17px',
    fontFamily: 'cursive',
  },
  slideshow: {
    marginLeft: 'auto',
    width: '50%', // Adjust width as needed
  },
  button: {
    borderRadius: '12px',
    backgroundColor: 'white', /* Green 
    border: 'none',
    color: 'black',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    marginLeft: '300px',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  },
  blogHeading: {
    color: 'white',
    fontSize: '2em',
    textAlign: 'center',
    fontFamily: 'cursive',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  },
};

export default Home;*/
import React from 'react';
import Slideshow from '../components/slideshow';
import mernImage from '../images/11.jpg';
import oopImage from '../images/10.jpg';
import aiImage from '../images/7.jpg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.description}>
          <h2 style={styles.heading}>Welcome to </h2><h2 style={styles.heading2}>TechCafe</h2>
          <p style={styles.paragraph}>
            Our blog is dedicated to bringing you the latest news, insights, and trends in the ever-evolving world of technology. Whether you're a seasoned tech enthusiast or just beginning to explore the digital landscape, our comprehensive articles, reviews, and guides are designed to inform, inspire, and empower you.
          </p>
          <Link to="/allblogs">
          <button style={styles.button}>Read Blogs</button></Link>
        </div>
        <div style={styles.slideshow}>
          <Slideshow />
        </div>
      </div>
      <h2 style={styles.blogHeading}>Latest Blogs</h2>
      <div style={styles.cardContainer}>
      <div style={styles.card}>
          <img src={aiImage} alt="The Rise of Artificial Intelligence: Transforming Our World" style={styles.image} />
          <h3 style={styles.cardTitle}>The Rise of Artificial Intelligence: Transforming Our World</h3>
          <a style={styles.link} href="/blogs1">Read More</a>
        </div>
        <div style={styles.card}>
          <img src={mernImage} alt="How to Set Up a MERN Stack Environment for Developing a Website" style={styles.image} />
          <h3 style={styles.cardTitle}>How to Set Up a MERN Stack Environment for Developing a Website</h3>
          <a style={styles.link}href="/blogs">Read More</a>
        </div>
        <div style={styles.card}>
          <img src={oopImage} alt="Understanding Object-Oriented Programming (OOP) Concepts" style={styles.image} />
          <h3 style={styles.cardTitle}>Understanding Object-Oriented Programming (OOP) Concepts</h3>
          <a style={styles.link} href="/blogs2">Read More</a>
        </div>
        
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
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: '20px',
    color: 'white',
  },
  description: {
    width: '50%', // Adjust width as needed
    paddingRight: '20px',
  },
  heading: {
    fontSize: '5em',
    marginBottom: '20px',
    fontFamily: 'cursive',
  },
  heading2: {
    fontSize: '5em',
    marginTop: '11px',
    fontFamily: 'cursive',
    color: 'yellow',
  },
  paragraph: {
    fontSize: '1.4em',
    lineHeight: '1.6',
    marginTop: '-17px',
    fontFamily: 'cursive',
  },
  slideshow: {
    marginLeft: 'auto',
    width: '50%', // Adjust width as needed
  },
  button: {
    borderRadius: '12px',
    backgroundColor: 'white', /* Green */
    border: 'none',
    color: 'black',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    marginLeft: '300px',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  },
  blogHeading: {
    color: 'white',
    fontSize: '2em',
    textAlign: 'center',
    fontFamily: 'cursive',
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
    height:'250px',
    borderRadius: '10px 10px 0 0',
  },
  cardTitle: {
    fontSize: '1.3em',
    color:'white',
    margin: '10px 0',
    fontFamily: 'cursive',
  },
  link:{
      color:'yellow',
      fontSize:'1.1em',
  },
  cardDescription: {
    fontSize: '1em',
    color: '#333',
    fontFamily: 'cursive',
  },
};

export default Home;
