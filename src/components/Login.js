import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import {login} from "../Features/UserSlice"
import '../styles/Login.css'
import { Redirect, useHistory } from 'react-router-dom';



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            email: email,
            password: password,
            loggedIn: true,
        }));
        history.push('/')
    }
    return (
        <div>
            <div>

                <div className="d-flex justify-content-center align-items-center login-container">


                    <form className="login-form text-center" onSubmit={handleSubmit}  >
                        <h1 className="mb-4 font-weight-bold title">User Login</h1>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email Adrress"
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                name="phone"
                                maxLength="10"
                            />

                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                value = {password}
                                onChange = {(e) => setPassword(e.target.value)}

                                maxLength="4"
                                className="form-control"
                                placeholder="Password"
                                name="pincode"

                            />

                        </div>

                        <button
                            type="submit"
                            className="btn  btn-lg btn-custom btn-block text-uppercase"
                        >
                            Log in
                        </button>

                        <p className="mt-3 font-weight-normal">
                            Don't have an account?{' '}
                            <a href="/auth/signup">
                                <strong>Register Now</strong>
                            </a>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login