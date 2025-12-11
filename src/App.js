import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarGlass from './components/NavbarGlass';
import HeroCarousel from './components/HeroCarousel';
import BlogGrid from './components/BlogGrid';
import PostPage from './components/PostPage';
import PhotoPage from './components/photopage';
import FooterGlass from './components/FooterGlass';
import './App.css';
import Photography from './components/Photography';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarGlass />

        <Routes>

          {/* Single Post */}
          <Route path="/post/:id" element={<PostPage />} />

          {/* Photography Page (Hero Carousel) */}
          <Route path="/photography" element={<HeroCarousel />} />

          {/* PhotoPage.js */}
          <Route path="/photopage" element={<PhotoPage />} />

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Photography />
                <BlogGrid />
              </>
            }
          />

        </Routes>

        <FooterGlass />
      </div>
    </Router>
  );
}

export default App;
