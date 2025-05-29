import { use } from 'react';
import { Navigate } from 'react-router';
import AuthContext from '../contexts/AuthContext';

const PrivateRoute = ({children}) => {
   const {user}=use(AuthContext);
   if(!user){
    return <Navigate to={'/login'}></Navigate>
   }
  return children
};

export default PrivateRoute;