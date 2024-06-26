import React from 'react';
import '../styles/blog.css';

const BlogPost2 = () => {
  return (
    <div className="blog-page">
      <div className="main-content">
        <header className="blog-header">
          <h1>Understanding Object-Oriented Programming (OOP) Concepts</h1>
          <p>Posted on June 23, 2024</p>
        </header>
        <section className="blog-images">
          <img src={require('../images/6.jpg')} style={{width:"50%"}} alt="Blog Post Image 1" />
        </section>
        <section className="blog-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula
            sapien nec sapien semper, eu viverra arcu bibendum. Phasellus vel mauris
            nec ligula interdum volutpat.
          </p>
          <p>
            Curabitur auctor, arcu at feugiat tincidunt, urna libero blandit tortor,
            sit amet interdum libero arcu ut purus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Integer vitae
            urna a arcu faucibus cursus.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames
            ac turpis egestas. Vivamus convallis mauris ac turpis faucibus vehicula.
            Morbi ac leo at dolor cursus vehicula.
          </p>
        </section>
      </div>
      <div className="sidebar">
        <div className="blog-card">
          <h2>How to Set Up a MERN Stack Environment for Developing a Website</h2>
          <a  href="/blogs">Read More</a>
        </div>
        <div className="blog-card">
          <h2>Understanding Object-Oriented Programming (OOP) Concepts</h2>
          <a  href="/blogs2">Read More</a>
        </div>
        <div className="blog-card">
          <h2>The Rise of Artificial Intelligence: Transforming Our World</h2>
          <a href="/blogs1">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default BlogPost2;
