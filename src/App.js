import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import BlogPost from './pages/blog';
import All from './pages/allblogs';
import BlogPost2 from './pages/blog2';
import BlogPost1 from './pages/blog1';
import Navbar from './components/navbar';
import About from './pages/about';
import Footer from './components/footer';

function App() {
  return (
    <Router>
<Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<BlogPost/>} />
        <Route path="/blogs2" element={<BlogPost2/>} />
        <Route path="/blogs1" element={<BlogPost1/>} />
        <Route path="/allblogs" element={<All/>} />
        <Route path="/about" element={<About/>}/>
        

      </Routes>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
