import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useMealRate from '../../../../Hooks/useMealRate';
import useTotalmealAdmin from '../../../../Hooks/useTotalmealAdmin';
const TotalInsight = () => {
    const {user} = useAuth()
    const [profile, setProfile] = useState({})
    const [insight, setInsight] = useState({})
    const {mealCountAdmin, mealsAdmin} = useTotalmealAdmin()
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${user.email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [user.email])
    console.log(mealsAdmin);
    return (
        <div className='width-60 pt-5 mx-auto d-flex justify-content-around'>
            <div className="calc-container total-meal">
                <p>Total Meal</p>
                <h1>1232</h1>
            </div>
            <div className="calc-container total-deposit">
                <p>Total Meal</p>
                <h1>1232</h1>
            </div>
            <div className="calc-container total-cost">
                <p>Total Meal</p>
                <h1>1232</h1>
            </div>
            <div className="calc-container current-mealrate">
                <p>Total Meal</p>
                <h1>123.92</h1>
            </div>
        </div>
    );
};

export default TotalInsight;