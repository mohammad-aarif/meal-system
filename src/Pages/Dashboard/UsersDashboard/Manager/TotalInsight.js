import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useDeposit from '../../../../Hooks/useDeposit';
import useTotalCost from '../../../../Hooks/useTotalCost';
import useTotalmealAdmin from '../../../../Hooks/useTotalmealAdmin';
import Loading from '../../../Shared/Loading/Loading';
const TotalInsight = () => {
    const {user, setIsLoading, isLoading} = useAuth()
    const [profile, setProfile] = useState({})
    const {mealCountAdmin} = useTotalmealAdmin(user.email);
    const {totalDepositCount} = useDeposit(user.email)
    const {totalCostCount} = useTotalCost(user.email)
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${user.email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .finally(() => setIsLoading(false))
    }, [user.email, setIsLoading])
    const mealrate = totalCostCount / mealCountAdmin;
    console.log(totalDepositCount)
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='width-60 pt-5 mx-auto d-flex justify-content-around'>
            <div className="calc-container total-meal">
                <p>Total Meal</p>
                <h1>{mealCountAdmin}</h1>
            </div>
            <div className="calc-container total-deposit">
                <p>Total Deposit</p>
                <h1>{totalDepositCount}</h1>
            </div>
            <div className="calc-container total-cost">
                <p>Total Cost</p>
                <h1>{totalCostCount}</h1>
            </div>
            <div className="calc-container current-mealrate">
                <p>Total Meal</p>
                <h1>{mealrate.toFixed(2)}</h1>
            </div>
        </div>
    );
};

export default TotalInsight;