// src/App.js

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import ProductList from './pages/products/ProductList';
import ProductView from './pages/products/ProductView';
import ProductUpload from './pages/products/ProductUpload';
import OrderDetails from './pages/order/OrderDetails';
import AdminProfile from './pages/Admin/AdminProfile';
import ResetPassword from './pages/Admin/ResetPassword';
import Login from './pages/Admin/Login';
import EditProduct from './pages/products/EditProduct'; // ✅ NEW IMPORT

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main d-flex">
        <div className="sidebarWrapper">
          <Sidebar />
        </div>
        <div className="content p-3 w-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductView />} /> {/* ✅ View Product */}
            <Route path="/edit-product/:productId" element={<EditProduct />} /> {/* ✅ Edit Product */}
            <Route path="/product-upload" element={<ProductUpload />} />
            <Route path="/order-details/:orderId" element={<OrderDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
