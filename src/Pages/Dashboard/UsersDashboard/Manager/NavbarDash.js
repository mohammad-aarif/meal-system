import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import useAuth from '../../../../Hooks/useAuth';
const NavbarDash = () => {
    const {user, logOut} = useAuth();
    const [dropdown, setDropdown] = useState(true)
    const [mobileMenu, setMobileMenu] = useState(true)
    return (
        <div className='navbar-dash'>
            <nav className='nav-content d-flex mx-auto w-75 justify-content-between align-items-center'>
                <div className="logo"><h2>MealSystem</h2></div>
                <div className="menu">
                    <ul>
                        <li><NavLink to='manager'>Dashboard</NavLink></li>
                        <li><NavLink to='addmeal'>Add Meal</NavLink></li>
                        <li><NavLink to='deposit'>Deposit</NavLink></li>
                        <li><NavLink to='addgoods'>Goods</NavLink></li>
                        {user.email && <li onClick={() => setDropdown(!dropdown)}><img className='nav-img ps-2' src={user.photoURL} alt="" />
                            <ul className="dropdown-nav px-3 py-2" style={dropdown?{display: 'none'} : {display: 'block'}}>
                                <li><button className='btn' onClick={logOut}>Logout</button></li>
                            </ul>
                        </li>}
                    </ul>
                </div>
                <div className="menu-icon px-3" onClick={() => setMobileMenu(!mobileMenu)} ><HiMenuAlt2 size={'2.2em'}/></div>
            </nav>
                <div className="mobile" style={mobileMenu ?{display: 'none'} : {display: 'flex'}} >
                    <ul>
                        <li><NavLink to='addmeal'>Add Meal</NavLink></li>
                        <li><NavLink to='deposit'>Deposit</NavLink></li>
                        <li><NavLink to='addgoods'>Goods</NavLink></li>
                        {user.email && <li ><img className='nav-img ps-2' src={user.photoURL} alt="" /><button onClick={logOut} className='btn'>Logout</button></li>}
                    </ul>
                </div>
        </div>
    );
};

export default NavbarDash;