import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Onboarding from './Pages/Onboarding';
import TestBank from './Pages/TestBank';
import ProductDetails from './Pages/ProductDetails';
import ExamInterface from './Pages/ExamInterface';
import Results from './Pages/Results';
import Dashboard from './Pages/Dashboard';
import Cart from './Pages/Cart';
import Pricing from './Pages/Pricing';
import Legal from './Pages/Legal';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import ProtectedRoute from './Components/Auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
            <Route path="/exams/:id" element={<ProtectedRoute><ExamInterface /></ProtectedRoute>} />
            
            {/* Public Routes */}
            <Route path="/test-bank" element={<TestBank />} />
            <Route path="/test-bank/:slug" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/plans" element={<Pricing />} />
            <Route path="/refund-policy" element={<Legal title="Refund Policy" />} />
            <Route path="/privacy-policy" element={<Legal title="Privacy Policy" />} />
            <Route path="/terms" element={<Legal title="Terms & Conditions" />} />
            <Route path="/disclaimer" element={<Legal title="Legal Disclaimer" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </CartProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
