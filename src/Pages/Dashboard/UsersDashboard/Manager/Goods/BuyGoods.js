import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import '../manager.css'

const BuyGoods = (props) => {
    const takeGoodsData = props.takeGoodsData;
    const handleDepositMoney = props.handleDepositMoney
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