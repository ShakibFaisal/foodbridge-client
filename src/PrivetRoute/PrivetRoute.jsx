import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../component/Loader';


const PrivetRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const location =useLocation()
    if (loading) {
        return  <Loader></Loader>
        
    }
    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivetRoute;