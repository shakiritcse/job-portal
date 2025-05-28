import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import AuthContext from './AuthContext';
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null);
    const googleProvider=new GoogleAuthProvider()
    const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }

   const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const signOutUser=()=>{
     return signOut(auth)
   }
   const signInWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
   }
   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        
            setUser(currentUser)
            setLoading(false)
    });
    return ()=>{unsubscribe()}
   },[])

    const authInfo={
     loading,
     createUser,
     signInUser,
     user,
     signOutUser,
     signInWithGoogle
     
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;