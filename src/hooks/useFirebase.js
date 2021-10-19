import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom';




initializeAuthentication();

const useFirebase = () => {




    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)

            })
            .catch(error => {
                setError(error.message)
            })
    }



    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
    }, [auth]);


    const logOut = () => {
        signOut(auth)
            .then(() => {
            })
    }


    return {
        signInUsingGoogle,
        user,
        logOut,
        setUser,
        error,
        setError
    }
};

export default useFirebase;