// src/BlogPost.js
/*import React from 'react';
import '../styles/blog.css';

const BlogPost = () => {
  return (
    <div className="blog-post">
      <header className="blog-header">
        <h1>My Awesome Blog Post</h1>
        <p>Posted on June 23, 2024</p>
      </header>
      <section className="blog-images">
        <img  src={require('../images/MERN.jpg')} alt="Blog Post Image 1" />
  
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
  );
}

export default BlogPost;*/
// src/BlogPost.js
/*import React from 'react';
import '../styles/blog.css';

const BlogPost = () => {
  return (
    <div className="blog-page">
      <div className="main-content">
        <header className="blog-header">
          <h1>How to Set Up a MERN Stack Environment for Developing a Website</h1>
          <p>Posted on June 23, 2024</p>
        </header>
        <section className="blog-images">
          <img src={require('../images/MERN.jpg')}   alt="Blog Post Image 1" />
        </section>
        <section className="blog-content">
          <p>
          The MERN stack is a popular JavaScript stack for building web applications.
          It consists of four main technologies: MongoDB, Express.js, React, and Node.js. Together, these technologies provide a powerful and flexible environment for full-stack development.In this blog, we'll guide you through setting up a MERN stack environment for developing a website.
          </p>
          <p>
          Before you start, make sure you have the following installed on your machine:</p>
           <p>  <ul>
          <li>Install Node.js</li>
          <li>Install MongoDB</li>
          <li>Install text editior( ex:-VS code)</li>
          </ul>
          </p>
          <p>Setting Up the Frontend</p>
          <p>  ac turpis egestas. Vivamus convallis mauris ac turpis faucibus vehicula.
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



export default BlogPost;*/
import React from 'react';
import '../styles/blog.css';

const BlogPost = () => {
  return (
    <div className="blog-page">
      <div className="main-content">
        <header className="blog-header">
          <h1>How to Set Up a MERN Stack Environment for Developing a Website</h1>
          <p>Posted on June 23, 2024</p>
        </header>
        <section className="blog-images">
          <img src={require('../images/MERN.jpg')} alt="Blog Post Image 1" />
        </section>
        <section className="blog-content">
          <p>
            The MERN stack is a popular JavaScript stack for building web applications. It consists of four main technologies: MongoDB, Express.js, React, and Node.js. Together, these technologies provide a powerful and flexible environment for full-stack development. In this blog, we'll guide you through setting up a MERN stack environment for developing a website.
          </p>
          <h2>Prerequisites</h2>
          <p>Before you start, make sure you have the following installed on your machine:</p>
          <ul>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>A text editor (e.g., VS Code)</li>
          </ul>
          
          <h2>Setting Up the Backend</h2>
          <h3>Step 1: Initialize a Node.js Project</h3>
          <p>
            First, create a new directory for your project and navigate into it using your terminal. Then, initialize a new Node.js project:
          </p>
          <pre><code style={{color:'blue'}}>mkdir mern-app
cd mern-app
npm init -y</code></pre>

          <h3>Step 2: Install Dependencies</h3>
          <p>
            Install Express.js and other necessary packages:
          </p>
          <pre><code style={{color:'blue'}}>npm install express mongoose cors dotenv</code></pre>

          <h3>Step 3: Set Up Express Server</h3>
          <p>
            Create a new file named <code>server.js</code> and set up a basic Express server:
          </p>
          <pre><code style={{color:'blue'}}>{`
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello from the MERN stack!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
          `}</code></pre>
          
          <h2>Setting Up the Frontend</h2>
          <h3>Step 1: Create a React Application</h3>
          <p>
            In the root directory of your project, create a new React application using Create React App:
          </p>
          <pre><code style={{color:'blue'}}>npx create-react-app client</code></pre>

          <h3>Step 2: Set Up Proxy for API Calls</h3>
          <p>
            To handle API calls to your backend server, set up a proxy in the <code>client/package.json</code> file:
          </p>
          <pre><code>{`
"proxy": "http://localhost:5000"
          `}</code></pre>

          <h3>Step 3: Start the Development Servers</h3>
          <p>
            Open two terminal windows. In the first terminal, navigate to the <code>client</code> directory and start the React development server:
          </p>
          <pre><code style={{color:'blue'}}>cd client
npm start</code></pre>
          <p>
            In the second terminal, start the Node.js server:
          </p>
          <pre><code style={{color:'blue'}}>npm run server</code></pre>

          <p>
            Now you have both the backend and frontend servers running, and you can start building your MERN stack application.
          </p>

          <h2>Conclusion</h2>
          <p>
            Setting up a MERN stack environment involves creating a Node.js backend with Express and MongoDB, and a React frontend. By following these steps, you can get your development environment up and running quickly. From here, you can start building out the features of your web application.
          </p>
        </section>
      </div>
      <div className="sidebar">
        <div className="blog-card">
          <h2>How to Set Up a MERN Stack Environment for Developing a Website</h2>
          <a href="/blogs">Read More</a>
        </div>
        <div className="blog-card">
          <h2>Understanding Object-Oriented Programming (OOP) Concepts</h2>
          <a href="/blogs2">Read More</a>
        </div>
        <div className="blog-card">
          <h2>The Rise of Artificial Intelligence: Transforming Our World</h2>
          <a href="/blogs1">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
