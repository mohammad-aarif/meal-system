import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import TextField from '@mui/material/TextField';
import './manager.css'
const BuyGoods = () => {
    const {user} = useAuth();
    const [goodsData, setGoodsData] = useState({});
    const takeGoodsData = e => {
        const key = e.target.name;
        const value = e.target.value;
        const newValue = {...goodsData}
        newValue[key] = value;
        setGoodsData(newValue)
    }
    const handleDepositMoney = (e) => {
        // console.log(goodsData);
        // const whoDid = e.target[0].value;
        // const goods = e.target[1].value;
        // const money = e.target[2].value;
        const money = goodsData.money
        const goods = goodsData.goods
        const whoDid = goodsData.whoDid
        const data = {
            network: user.email,
            whoDid: whoDid,
            goods : goods,
            money : parseInt(money),
            date : new Date().toLocaleDateString()
        }
        const depositData = {
            email: user.email,
            goodsCost : parseInt(money)
        }
        fetch('https://intense-inlet-54612.herokuapp.com/cost',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        fetch('https://intense-inlet-54612.herokuapp.com/users/cost',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(depositData)
        })
        console.log(data, depositData);
        e.preventDefault();
        }
    return (
        <div className='width-35 mx-auto py-5'>
                    <form onSubmit={handleDepositMoney}>
                        <TextField
                        onBlur={takeGoodsData}
                        fullWidth 
                        label="Name"
                        name='whoDid'
                        color="warning"
                        variant="standard"
                        />
                        <TextField
                        fullWidth
                        onBlur={takeGoodsData}
                        multiline
                        color="warning"
                        maxRows={4}
                        name='goods'
                        label="Goods Details"
                        variant="standard"
                        />
                        <TextField 
                        fullWidth 
                        type='text'
                        onBlur={takeGoodsData}
                        label="Cost"
                        name='money'
                        color="warning"
                        variant="standard"
                        />
                        <input type="submit" className='general-btn w-100 my-3' value="Submit" />
                    </form>
        </div>
    );
};

export default BuyGoods;