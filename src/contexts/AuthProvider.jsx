import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from '../firebase/firebase.init';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
    const authInfo={
     loading,
     createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;