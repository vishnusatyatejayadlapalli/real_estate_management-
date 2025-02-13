import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import WishlistPage from './pages/WishlistPage';
import AdminPanel from './pages/AdminPanel';
import Contact from './pages/Contact'; // Import Contact Page
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/contact" element={<Contact />} /> {/* Contact Page Route */}
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
