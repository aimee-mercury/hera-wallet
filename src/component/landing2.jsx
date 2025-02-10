import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './land2.css';
import { FaWallet, FaHome, FaInfoCircle, FaCog } from 'react-icons/fa';

const Landingpage = () => {
    const [isPanelActive, setIsPanelActive] = useState(false);
    const [panelContent, setPanelContent] = useState({
        title: 'Wallet Store 1',
        text: 'Content for Wallet Store 1',
    });
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    const gridItems = [
        { title: 'Wallet Store 1', text: 'Content for Wallet Store 1', icon: <FaWallet />, color: '#ff5733', walletNumber: '123456' },
        { title: 'Wallet Store 2', text: 'Content for Wallet Store 2', icon: <FaWallet />, color: '#33ff57', walletNumber: '654321' },
        { title: 'Wallet Store 3', text: 'Content for Wallet Store 3', icon: <FaWallet />, color: '#3357ff', walletNumber: '987654' },
        { title: 'Wallet Store 4', text: 'Content for Wallet Store 4', icon: <FaWallet />, color: '#ff33a1', walletNumber: '123789' },
        { title: 'Wallet Store 5', text: 'Content for Wallet Store 5', icon: <FaWallet />, color: '#ff8c33', walletNumber: '543210' }
    ];

    const openPanel = (item) => {
        setPanelContent(item);
        setIsPanelActive(true);
    };

    const closePanel = () => {
        setIsPanelActive(false);
    };

    return (
        <div className="landing-page fade-in">
            {/* Navbar */}
            <div className="navbar">
            <img src="" classname='im' alt="Logo" />
                <h1>Wallet Stores</h1>
                
                
            </div>

            {/* Sidebar Navigation */}
            <div className="sidebar right-sidebar ">
                {gridItems.map((item, index) => (
                    <div
                        key={index}
                        className={`sidebar-icon ${activeItem === index ? 'active' : ''}`}
                        style={{ backgroundColor: item.color }}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => {
                            openPanel(item);
                            setActiveItem(index);
                        }}
                    >
                        {item.icon}
                        <div className="title-container">
                            {hoveredItem === index && (
                                <span className="tooltip">
                                    {item.title}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="container fade-in">
                {/* Announcement Text */}
                <div className="announcement-card">
                    <h3>We're hard at work building a solution tailored to meet your current needs.</h3>
                    <h4>Stay tuned for something amazing that's just around the corner!</h4>
                </div>
            </div>

            {/* Slide Panel */}
            {isPanelActive && (
                <div className="slide-panel active">
                    <button className="close-panel-btn" onClick={closePanel}>Close</button>
                    <h3>{panelContent.title}</h3>
                    <p>{panelContent.text}</p>
                </div>
            )}

            {/* Footer */}
            <div className="footer fade-in ">
                <div className="footer-content">
                    <div className="footer-left">
                        <img src="" alt="Logo" className="footer-logo"/>
                        <p>HERA Solution LTD Rwanda</p>
                    </div>
                    <div className="footer-right">
                        <div className="social-media">
                            <a href="" target="_blank" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj77psX8i9Z4G4m_Y2PF78N4l673OQvoPZKg&s" alt="Facebook" />
                            </a>
                            <a href="" target="_blank" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFr470UF-T1s_bM1M1qBCcMPsTj3xW5l3gg&s" alt="Instagram" />
                            </a>
                            <a href="https://wa.me/+250791789684" target="_blank" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3If7R2lmRdZCpL52fRz0wEmyOD_ju3NHdEA&s" alt="WhatsApp" />
                            </a>
                            <a href="">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyxU0K2Jex5or5LSATjWaNB8oSA6XPsWRRg&s" alt="Email" />
                            </a>
                        </div>
                        <p>© 2025 HERA Solution LTD Rwanda</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingpage;
