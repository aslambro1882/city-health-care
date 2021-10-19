import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { signInWithEmailAndPassword, getAuth } from '@firebase/auth';
import { Link, useLocation, useHistory } from 'react-router-dom';


const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";


    const { signInUsingGoogle, error } = useAuth();
    const auth = getAuth();

    const { setUser } = useAuth();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLoginEmail = e => {
        setEmail(e.target.value);
    }
    const handleLoginPassword = e => {
        setPassword(e.target.value);
    }

    const processLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                console.log("login success")
                history.push(redirect_url);
            })
            .catch(error => {
                console.log(error.message)
            })
    }




    return (
        <div className="notfound d-flex justify-content-center align-items-center">
            <div className="login-div bg-light mx-auto px-4 py-3 shadow mt-5">
                <h2>Sign In</h2>

                <form onSubmit={processLogin}>
                    <div className="mt-5">
                        <small>{error}</small>
                        <label className="d-flex justify-content-start" htmlFor="">Email</label>
                        <div>
                            <input onBlur={handleLoginEmail} className="w-100" type="email" name="" id="" />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label className="d-flex justify-content-start" htmlFor="">Password</label>
                        <div>
                            <input onBlur={handleLoginPassword} className="w-100" type="password" name="" id="" />
                        </div>
                    </div>
                    <br />
                    <div>
                        <button className="btn btn-outline-primary w-50" type="submit">Sign In</button>
                    </div>
                    <p>new user? <Link to="/register">Sign Up</Link></p>
                </form>
                <br />
                <div className="border border-info w-100"></div>
                <br />
                <div className="mb-4">
                    <button onClick={signInUsingGoogle} className="btn btn-outline-warning w-75">Google Sign In</button>
                </div>


            </div>
        </div>
    );
};

export default Login;