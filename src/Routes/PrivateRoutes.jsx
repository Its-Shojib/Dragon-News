import { useContext } from "react";
import { AuthContext } from './../Layout/AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    let { user, loading} = useContext(AuthContext);
    let location = useLocation();


    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;