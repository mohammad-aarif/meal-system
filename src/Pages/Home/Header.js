import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div className="container">
                <div className="row py-5 align-items-center">
                    <div className="col-md-6">
                        <h2>Simple Meal <br /><span>Management</span>  System</h2>
                        <p>This web application is made for bachalor's meal management.</p>
                        <Link className='general-btn text-decoration-none' to='/login'>Login to Explore</Link>
                    </div>
                    <div className="col-md-6">
                        <img className='w-100' src="https://i.ibb.co/kX5mhkQ/delicious-fried-chicken-plate-ccexpress.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;