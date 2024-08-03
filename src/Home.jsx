import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Order Management System</h1>
            <nav>
                <ul>
                    <li><Link to="/orders">View Orders</Link></li>
                    <li><Link to="/add-order">Add Order</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
