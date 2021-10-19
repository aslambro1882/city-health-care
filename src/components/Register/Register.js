import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, setUser } = useAuth();
    const location = useLocation();
    console.log("from registration", location);
    const history = useHistory();
    console.log("history from login", history);
    const redirect_url = location?.state?.from || "/home";


    const auth = getAuth();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleRegName = e => {
        setName(e.target.value);
    }

    const handleRegEmail = e => {
        setEmail(e.target.value);
    }

    const handleRegPassword = e => {
        setPassword(e.target.value)
    }


    const createNewUser = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                result.user.displayName = name;
                setUser(result.user)
                console.log(result.user)
                history.push(redirect_url);

            })
            .catch(error => {
                console.log(error.message)
            })


    }



    return (
        <div className="notfound d-flex justify-content-center align-items-center">
            <div className="login-div bg-light mx-auto px-4 py-3 shadow mt-5">
                <h2>Sign Up</h2>

                <form onSubmit={createNewUser}>
                    <div className="mt-5">
                        <label className="d-flex justify-content-start" htmlFor="">Name</label>
                        <div>
                            <input onBlur={handleRegName} className="w-100" type="text" />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label className="d-flex justify-content-start" htmlFor="">Email</label>
                        <div>
                            <input onBlur={handleRegEmail} className="w-100" type="email" />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label className="d-flex justify-content-start" htmlFor="">Password</label>
                        <div>
                            <input onBlur={handleRegPassword} className="w-100" type="password" />
                        </div>
                    </div>
                    <br />
                    <div>
                        <button className="btn btn-outline-primary w-50" type="submit">Sign Up</button>
                    </div>
                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
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

export default Register;