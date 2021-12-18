import { getRoles } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import {Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import AddMeal from './AddMeal';
import BuyGoods from './BuyGoods';
import DepositMoney from './DepositMoney';
import NavbarDash from './NavbarDash';
import TotalInsight from './TotalInsight';

const ManagerDash =  () => {
    const {user, isLoading} = useAuth();
    const [role, setRole] = useState('loading')
    const history = useNavigate()
    // console.log(url);
    const url =  `https://intense-inlet-54612.herokuapp.com/users/role/${user.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setRole(data.role)
        })
    }, [])
                if(role !== 'manager'){
                console.log(role);
                const uri = '/userdashboard';
                // history(uri)
            }       
    return (
        <div className='manager-container'>
            <div className="overlay">
                <NavbarDash></NavbarDash> 
            <Routes>
                <Route path='/' element={<TotalInsight />} />
                <Route path='/manager' element={<TotalInsight />} />
                <Route path='/addmeal' element={<AddMeal />} />
                <Route path='/deposit' element={<DepositMoney />} />
                <Route path='/addgoods' element={<BuyGoods />} />
            </Routes>
            </div>
        </div>
    );
};

export default ManagerDash;