import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarGlass from './components/NavbarGlass';
import HeroCarousel from './components/HeroCarousel';
import BlogGrid from './components/BlogGrid';
import PostPage from './components/PostPage';
import PhotoPage from './components/photopage';
import FooterGlass from './components/FooterGlass';
import './App.css';
import Photography from './components/Photography';
import AdminDashboard from "./admin/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import CardDetails from "./pages/CardDetails";

function App() {
  return (
    <div className="App">
      <NavbarGlass />

      <Routes>

        {/* Single Post */}
        <Route path="/post/:id" element={<PostPage />} />

        {/* Photography Page */}
        <Route path="/photography" element={<HeroCarousel />} />

        {/* PhotoPage */}
        <Route path="/photopage" element={<PhotoPage />} />
        <Route path="/photos/:id" element={<CardDetails />} />
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

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Admin Page (Protected) */}
        <Route
          path="/admin"
          element={
            localStorage.getItem("isAdminLoggedIn") === "true"
              ? <AdminDashboard />
              : <LoginPage />
          }
        />

      </Routes>

      <FooterGlass />
    </div>
  );
}

export default App;
