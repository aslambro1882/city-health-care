import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';




initializeAuthentication();

const useFirebase = () => {

    // const location = useLocation();
    // console.log("location from login", location);
    // const history = useHistory();
    // console.log("history from login", history);
    // const redirect_url = location?.state?.from || "/home";



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