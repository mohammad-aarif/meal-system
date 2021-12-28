import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from './Header';
import './home.css'

const Home = () => {
    return (
        <div className='root-background'>
            <Navbar />
            <Header />
        </div>
    );
};

export default Home;