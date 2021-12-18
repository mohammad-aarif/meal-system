import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='root-background'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Meal System</h3>
                        <p>This web application is made for bacholor's meal count.</p>
                        <Link className='general-btn text-decoration-none' to='/'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;