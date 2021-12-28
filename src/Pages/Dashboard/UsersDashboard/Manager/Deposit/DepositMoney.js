import { TextField } from '@mui/material';
import React from 'react';

const DepositMoney = (props) => {
    const handleDepositMoney = props.handleDepositMoney
    const netMember = props.netMember
    return (
        <div className='mx-auto'>
            <div className="add-container general-btn my-3 mx-1 text-center px-3 py-2 row justify-content-between align-items-center">
                Deposit Money
            </div>
            {
                netMember.map(data => (
                    <div key={data._id} className="add-container my-3 px-3 d-flex justify-content-between align-items-center">
                        <p>{data.name}</p>
                        <form key={data._id} onSubmit={(e) => handleDepositMoney(e, data.email, data.name)}>
                            <TextField 
                            className="mb-2"
                            label="Ammount"
                            name='money'
                            color="warning"
                            variant="standard"
                            />
                            <input type="submit" className='btn px-4 mt-2 ms-3 general-btn' value="Add" />
                        </form>
                    </div>
                ))
            }
        </div>
    );
};

export default DepositMoney;