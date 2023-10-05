import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

export let AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    let createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    let Logout = () => {
        setLoading(true);
        signOut(auth)
    }
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    let authInfo = {
        user,
        loading,
        createUser,
        login,
        Logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;