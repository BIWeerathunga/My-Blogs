import React from 'react';

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>
        <span style={styles.tec}>Tec</span><span style={styles.cafe}>Cafe</span>
      </div>
      <div style={styles.links}>
        <a href="/" style={styles.link1}>Sign Out</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="/allblogs" style={styles.link}>Blogs</a>
        <a href="/" style={styles.link}>Home</a>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 30px',
    backgroundColor: '#36454F',
  },
  logo: {
    fontSize: '26px',
    fontWeight: 'bold',
  },
  tec: {
    color: 'white',
  },
  cafe: {
    color: 'yellow',
  },
  links: {
 
    gap: '45px',
  
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '23px',
    marginLeft: '-200px', 
  },
  link1: {
    color: 'yellow',
    textDecoration: 'none',
    fontSize: '23px',
    marginLeft: '-200px', 
  },

};

export default Navbar;

