import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const ManagerRoute = ({ children, ...rest }) => {
    const { role, setIsLoading, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <CircularProgress /> }
    if(role === undefined){
        setIsLoading(true)
    }
    setIsLoading(true)
    if (role === 'manager') {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
    
};

export default ManagerRoute