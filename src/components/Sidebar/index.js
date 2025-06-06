import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { DiGoogleAnalytics } from "react-icons/di";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
    const navigate = useNavigate();

    const isOpenSubmenu = (index) => {
        if (activeTab === index) {
            setIsToggleSubmenu(!isToggleSubmenu);
        } else {
            setActiveTab(index);
            setIsToggleSubmenu(true);
        }
    };

    const handleDirectNav = (path, tabIndex) => {
        navigate(path);
        setActiveTab(tabIndex);
        setIsToggleSubmenu(false);
    };

    return (
        <div className="sidebar">
            <ul>
                <li className="align-items-center">
                    <Button
                        className={`w-100 ${activeTab === 0 ? 'active' : ''}`}
                        onClick={() => handleDirectNav('/dashboard', 0)}
                    >
                        <span className="icon"><MdDashboard /></span>
                        Dashboard
                        <span className="arrow"><FaAngleRight /></span>
                    </Button>
                </li>

                <li className="align-items-center">
                    <Button
                        className={`w-100 ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => isOpenSubmenu(1)}
                    >
                        <span className="icon"><AiFillProduct /></span>
                        Products
                        <span className="arrow"><FaAngleRight /></span>
                    </Button>

                    <div className={`submenuwrapper ${activeTab === 1 && isToggleSubmenu ? 'collapsed' : 'collapse'}`}>
                        <ul className="submenu">
                            <li><Link to="/product-list">Product List</Link></li>
                            <li><Link to="/product/1">Product View</Link></li> {/* Example ID */}
                            <li><Link to="/product-upload">Product Upload</Link></li>
                            <li><Link to="/edit-product/1">Edit Product</Link></li> {/* ✅ Fixed route */}
                        </ul>
                    </div>
                </li>

                <li className="align-items-center">
                    <Button
                        className={`w-100 ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => handleDirectNav('/order-details/1', 2)} // Example order ID
                    >
                        <span className="icon"><IoCart /></span>
                        Orders
                        <span className="arrow"><FaAngleRight /></span>
                    </Button>
                </li>

                <li className="align-items-center">
                    <Button
                        className={`w-100 ${activeTab === 3 ? 'active' : ''}`}
                        onClick={() => handleDirectNav('/messages', 3)}
                    >
                        <span className="icon"><RiMessage2Fill /></span>
                        Messages
                        <span className="arrow"><FaAngleRight /></span>
                    </Button>
                </li>

                <li className="align-items-center">
                    <Button
                        className={`w-100 ${activeTab === 4 ? 'active' : ''}`}
                        onClick={() => handleDirectNav('/analytics', 4)}
                    >
                        <span className="icon"><DiGoogleAnalytics /></span>
                        Analytics
                        <span className="arrow"><FaAngleRight /></span>
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
