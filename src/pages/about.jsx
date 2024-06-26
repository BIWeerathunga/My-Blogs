import React from 'react';

function About() {
  return (
    <div style={{background:"black",minHeight: '100vh'}}>
    <div style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>
      <img src="path_to_photo" alt="Your Photo" style={styles.photo} />
      <p style={styles.introduction}>
        Hi there! I'm Buddhini Weerathunga, and welcome to my blog.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Personal Background</h2>
        <p style={styles.text}>
        I'm Buddhini Weerathunga, a 22-year-old passionate about technology and innovation. Currently, I'm pursuing a BSc in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT).
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Blog’s Mission and Purpose</h2>
        <p style={styles.text}>
        Here, we embark on an exciting journey through the dynamic world of Information Technology. Our mission is to explore, educate, and inspire individuals who share a passion for technology and its endless possibilities.
     </p> </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Topics Covered</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Programming and Development</li>
          <li style={styles.listItem}>Cybersecurity</li>
          <li style={styles.listItem}>Data Science and Analytics</li>
          <li style={styles.listItem}>Cloud Computing</li>
          <li style={styles.listItem}>Networking and Infrastructure</li>
          <li style={styles.listItem}>Emerging Technologies</li>
          <li style={styles.listItem}>Career and Professional Development</li>
          <li style={styles.listItem}> Tech News and Trends</li>

        </ul>
      </section>

     

     

     

      <p style={styles.thankYou}>
        Thank you for stopping by, and I hope you enjoy reading my blog as much as I enjoy creating it!
      </p>
      <p style={styles.signature}>Best, <br /> Buddhini Weerathunga</p>
    </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1000px',
    marginLeft:'10px',
    margin: '0 auto',
    backgroundColor: 'black',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color:'white',
    fontSize: '2.5em',
    textAlign: 'center',
    marginBottom: '20px',
  },
  photo: {
    display: 'block',
    maxWidth: '200px',
    borderRadius: '50%',
    margin: '0 auto 20px',
  },
  introduction: {
    fontSize: '1.2em',
    textAlign: 'center',
    marginBottom: '40px',
    color:'white',
  },
  section: {
    marginBottom: '40px',
  },
  subHeading: {
    fontSize: '1.8em',
    marginBottom: '10px',
    color:'yellow',
  },
  text: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    color:'white',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '10px',
    fontSize: '1.1em',
    color:'white',
  },
  quote: {
    fontStyle: 'italic',
    fontSize: '1.1em',
    marginTop: '20px',
    color: 'blue',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  thankYou: {
    fontSize: '1.2em',
    textAlign: 'center',
    marginBottom: '20px',
    color:'#007BFF',
  },
  signature: {
    fontSize: '1.2em',
    textAlign: 'center',
    color:'white',
  },
};

export default About;
