import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Pages/AdminDashboard';
import Orders from './Pages/Orders';
import Products from './Pages/Products';
import Categories from './Pages/Categories';
import Layout from './Components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/exams" element={<div className="p-20 text-white">Manage Exams (Coming Soon)</div>} />
          <Route path="/users" element={<div className="p-20 text-white">Manage Students (Coming Soon)</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
