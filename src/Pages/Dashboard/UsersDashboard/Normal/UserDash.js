import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Loading from '../../../Shared/Loading/Loading';
import AllCalc from './AllCalc';
import CreateNet from './CreateNet';
import MarketList from './MarketList';
import NavUser from './NavUser';
import Network from './Network';

const UserDash = () => {
    const{isLoading} = useAuth()
    console.log(isLoading)
    // useEffect(() => {
        // if(isLoading){
        //     return <Loading />
        // }
    // }, [isLoading])
    return (
        <div className='manager-container'>
            <div className="overlay">
                <NavUser />
            <Routes>
                <Route path='/' element={<AllCalc />} />
                <Route path='/home' element={<AllCalc />} />
                <Route path='/create' element={<CreateNet />} />
                <Route path='/network' element={<Network />} />
                <Route path='/goods' element={<MarketList />} />
            </Routes>
            </div>
        </div>
    );
};

export default UserDash;