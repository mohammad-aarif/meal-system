import { CircularProgress } from '@mui/material';
import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex loading justify-content-center align-items-center w-100'>
            <CircularProgress />
        </div>
    );
};

export default Loading;