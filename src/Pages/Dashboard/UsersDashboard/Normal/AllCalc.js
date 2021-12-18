import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useTotalmeal from '../../../../Hooks/useTotalmeal';
import './userdash.css'
const AllCalc = () => {
    const {user} = useAuth()
    const {mealCount} = useTotalmeal(user.email)
    const [profile, setProfile] = useState([])
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${user.email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [user.email])
    console.log(mealCount);
    console.log('hele');
    return (
        <div className='width-60 pt-5 mx-auto d-flex justify-content-around'>
            <div className="calc-container total-meal">
                <p>Total Meal</p>
                <h1>{mealCount}</h1>
            </div>
            <div className="calc-container total-deposit">
                <p>Total Deposit</p>
                <h1>{profile.money}</h1>
            </div>
            <div className="calc-container current-mealrate">
                <p>Meal Rate</p>
                <h1>{mealCount}</h1>
            </div>
        </div>
    );
};

export default AllCalc;