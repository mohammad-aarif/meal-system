import React from 'react';

const GoodsLog = (props) => {
    const market = props.market
    const handleDelete = props.handleDelete
    return (
        <div className='mx-auto py-5'>
            <h4>Market List</h4>
            <div className="add-container general-btn my-3 px-3 py-2 row justify-content-between align-items-center">
                    <p className='fw-bold col-2'>Date</p>
                    <p className='fw-bold text-center col-2'>Name</p>
                    <p className='fw-bold col-2 text-center'>Descrption</p>
                    <p className='fw-bold col-2 text-center'>Cost</p>
                    <p className='fw-bold col-2 text-end'>Delete</p>
                </div>
            {
                market.map(data => (
                    <div key={data._id} className="add-container my-3 px-3 py-2 row justify-content-between align-items-center">
                        <p className='fw-bold col-2 text-start'>{data.date}</p>
                        <p className='fw-bold col-2 text-center'>{data.whoDid}</p>
                        <p className='fw-bold col-2 text-center'>{data.goods}</p>
                        <p className='fw-bold col-2 text-center'>{data.money}</p>
                        <button onClick={() => handleDelete(data._id)} className='col-2 remove-btn btn'>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default GoodsLog;