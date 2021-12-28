import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Loading from '../../Shared/Loading/Loading';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useAuth();
    let location = useLocation();
    
    if(isloading){
        return <Loading />
    }
    if(user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
    // return null
};

export default PrivateRoute