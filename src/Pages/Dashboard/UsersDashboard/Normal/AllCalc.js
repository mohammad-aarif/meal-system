import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useDeposit from '../../../../Hooks/useDeposit';
import useTotalCost from '../../../../Hooks/useTotalCost';
import useTotalmeal from '../../../../Hooks/useTotalmeal';
import useTotalmealAdmin from '../../../../Hooks/useTotalmealAdmin';
import Loading from '../../../Shared/Loading/Loading';
import Deposit from '../Manager/Deposit/Deposit';
import './userdash.css'
const AllCalc = () => {
    const {user, isLoading} = useAuth()
    const {mealCount} = useTotalmeal(user.email)
    const {totalDepositCount} = useDeposit(user.email)
    const [profile, setProfile] = useState([])
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${user.email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [user.email])
    console.log(profile?.networkInfo?.network);
    
    const {totalCostCount} = useTotalCost(profile?.networkInfo?.network)
    const {mealCountAdmin} = useTotalmealAdmin(profile?.networkInfo?.network)
    const depositCount = useTotalmealAdmin(user.email)
    console.log(depositCount);
    const mealrate = totalCostCount / mealCountAdmin;

    if(isLoading){
        return <Loading />
    }
    return (
        <div className='width-60 pt-5 mx-auto d-flex justify-content-around'>
            <div className="calc-container total-meal">
                <p>Total Meal</p>
                <h1>{isLoading ? <CircularProgress /> : mealCount}</h1>
            </div>
            <div className="calc-container total-deposit">
                <p>Total Deposit</p>
                <h1>{isLoading ? <CircularProgress /> : totalDepositCount}</h1>
            </div>
            <div className="calc-container current-mealrate">
                <p>Meal Rate</p>
                <h1>{isLoading ? <CircularProgress /> : mealrate.toFixed(2)}</h1>
            </div>
        </div>
    );
};

export default AllCalc;