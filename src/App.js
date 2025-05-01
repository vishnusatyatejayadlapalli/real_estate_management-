import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PropertyProvider } from "./context/PropertyContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import WishlistPage from "./pages/WishlistPage";
import AdminPanel from "./pages/AdminPanel";
import Contact from "./pages/Contact";
import UserDashboard from "./components/UserDashboard";
import SellerDashboard from "./components/SellerDashboard";
import AddProperty from "./pages/AddProperty";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <PropertyProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/wishlist" element={
              <PrivateRoute>
                <WishlistPage />
              </PrivateRoute>
            } />
            <Route path="/admin" element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            } />
            <Route path="/user-dashboard" element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            } />
            <Route path="/seller-dashboard" element={
              <PrivateRoute>
                <SellerDashboard />
              </PrivateRoute>
            } />
            <Route path="/add-property" element={
              <PrivateRoute>
                <AddProperty />
              </PrivateRoute>
            } />
          </Routes>
          <Footer />
        </div>
      </PropertyProvider>
    </AuthProvider>
  );
};

export default App;
