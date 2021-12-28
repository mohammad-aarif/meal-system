import React from 'react';

const DepositLog = (props) => {
    const deposit = props.deposit
    const handleDelete = props.handleDelete
 
    return (
        <div>
            <div className="add-container general-btn my-3 px-3 py-2 row justify-content-between align-items-center">
                    <p className='fw-bold col-3'>Date</p>
                    <p className='fw-bold text-center col-3'>Name</p>
                    <p className='fw-bold col-3 text-center'>Ammount</p>
                    <p className='fw-bold col-3 text-center'>Delete</p>
                </div>
            {
                deposit.map(data => (
                    <div key={data._id} className="add-container my-3 px-3 py-2 row justify-content-between align-items-center">
                        <p className='fw-bold col-3 text-start'>{data.date}</p>
                        <p className='fw-bold col-3 text-center'>{data.name}</p>
                        <p className='fw-bold col-3 text-center'>{data.money}</p>
                        <button onClick={() => handleDelete(data._id)} className='btn remove-btn col-3'>Delete</button>

                    </div>
                ))
            }
        </div>
    );
};

export default DepositLog;