import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import useAuth from '../../../../Hooks/useAuth';
import useUser from '../../../../Hooks/useUser';
const NavUser = () => {
    const {user, logOut} = useAuth();
    const [profile, setProfile] = useState('')
    const [dropdown, setDropdown] = useState(true)
    const [mobileMenu, setMobileMenu] = useState(true)
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${user.email}`)
        .then(res => res.json())
        .then(data => setProfile(data.networkInfo.network))
    }, [user.email])
    console.log(profile);
        return (
        <div className='navbar-dash'>
            <nav className='nav-content d-flex mx-auto w-75 justify-content-between align-items-center'>
                <div className="logo"><h2>MealSystem</h2></div>
                <div className="menu">
                    {profile ? <ul>
                        <li><NavLink to='home'>Dasboard</NavLink></li>
                        <li><NavLink to='goods'>Goods</NavLink></li>
                        <li><NavLink to='network'>Network</NavLink></li>
                        <li onClick={() => setDropdown(!dropdown)}><img className='nav-img ps-2' src={user.photoURL} alt="" />
                            <ul className="dropdown-nav px-3 py-2" style={dropdown?{display: 'none'} : {display: 'block'}}>
                                <li><button className='btn' onClick={logOut}>Logout</button></li>
                            </ul>
                        </li>
                    </ul>: <ul><li><NavLink to='create'>Create Net</NavLink></li></ul>
                    }
                </div>
                <div className="menu-icon px-3" onClick={() => setMobileMenu(!mobileMenu)} ><HiMenuAlt2 size={'2.2em'}/></div>
            </nav>
                <div className="mobile" style={mobileMenu ?{display: 'none'} : {display: 'flex'}} >
                    <ul>
                        <li><NavLink to='create'>Create Net</NavLink></li>
                        <li><NavLink to='goods'>Goods</NavLink></li>
                        <li><NavLink to='network'>Network</NavLink></li>
                        {user.email && <li ><img className='nav-img ps-2' src={user.photoURL} alt="" /><button onClick={logOut} className='btn'>Logout</button></li>}
                    </ul>
                </div>
        </div>
    );
};

export default NavUser;