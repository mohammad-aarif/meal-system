import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useMarket from '../../../../Hooks/useMarket';

const AllMarket = () => {
    const {user} = useAuth()
    const {market} = useMarket(user.email)
    return (
        <div className='width-35 mx-auto py-5'>
            <h4>Market List</h4>
            {
                market.map(data => (
                    <div className="add-container my-3 px-3 py-2 d-flex justify-content-between align-items-center">
                        <p className='fw-bold'>{data.date}</p>
                        <p className='fw-bold'>{data.whoDid}</p>
                        <p className='fw-bold'>{data.goods}</p>
                        <p className='fw-bold'>{data.money}</p>
                        {/* {user.networkInfo.network} */}
                    </div>
                ))
            }
        </div>
    );
};

export default AllMarket;