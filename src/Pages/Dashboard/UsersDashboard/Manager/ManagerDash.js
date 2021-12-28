import React, { useEffect, useState } from 'react';
import {Route, Routes,  useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Loading from '../../../Shared/Loading/Loading';
import Deposit from './Deposit/Deposit';
import Manager from './Manager';
import NavbarDash from './NavbarDash';
import TotalInsight from './TotalInsight';
import MealDash from './AddMeal/MealDash'
import GoodsDash from './Goods/GoodsDash';
const ManagerDash =  () => {
    const {user, isLoading, setIsLoading} = useAuth();
    const [role, setRole] = useState('loading')
    const history = useNavigate()
    const url =  `https://intense-inlet-54612.herokuapp.com/users/role/${user.email}`
    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setRole(data.role)
        })
        .finally(() => setIsLoading(false))
    }, [url])

    useEffect(() => {
        if(role !== 'manager'){
        const uri = '/userdashboard';
        // history(uri)
        }
        if(isLoading){
            return <Loading />
        }
    }, [role, isLoading, history])
      
    return (
        <div className='manager-container'>
            <div className="overlay">
                <NavbarDash></NavbarDash> 
            <Routes>
                <Route path='/' element={<TotalInsight />} />
                <Route path='/manager' element={<TotalInsight />} />
                <Route path='/addmember' element={<Manager />} />
                <Route path='/addmeal' element={<MealDash />} />
                <Route path='/deposit' element={<Deposit />} />
                <Route path='/addgoods' element={<GoodsDash />} />
            </Routes>
            </div>
        </div>
    );
};

export default ManagerDash;