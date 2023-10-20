import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { useAuth } from './../AuthContext';

import './Styles/Aunthenticate.css';


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function RegistrationForm() {
    const fnameRef = useRef();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [cpwd, setCpwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);


    useEffect(() => {
        fnameRef.current.focus();
    }, []);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === cpwd);
    }, [pwd, cpwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                fname,
                lname,
                email,
                role,
                password: pwd,
            });

            console.log(response);
            if (response.status === 201) {
                toast.success("User registered successfully!", { position: "bottom-right" });
                setFname('');
                setLname('');
                setEmail('');
                setPwd('');
                setCpwd('');
                setRole('');
            } else if (response.data === 'user already exist') {
                toast.info("User Already exist", { position: "bottom-right" });
            }
        } catch (error) {
            toast.error("Internal server error", { position: "bottom-right" });
        }
    };


    return (
        <div className="modal fade modal-lg" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="register">
                            <form className="form">
                                <p className="title">Register</p>
                                {/* <hr/> */}
                                <p className="message">Signup now and get full access to our app.</p>
                                <div className="flex">
                                    <label>
                                        <input
                                            type="text"
                                            className="input"
                                            ref={fnameRef}
                                            value={fname}
                                            onChange={(e) => setFname(e.target.value)}
                                            required
                                        />
                                        <span>Firstname</span>
                                    </label>

                                    <label>
                                        <input
                                            type="text"
                                            className="input"
                                            value={lname}
                                            onChange={(e) => setLname(e.target.value)}
                                            required
                                        />
                                        <span>Lastname</span>
                                    </label>
                                </div>

                                <label>
                                    <input
                                        type="text"
                                        className="input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <span>Email</span>
                                </label>

                                <label>
                                    <select
                                        className="input"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        required
                                    >
                                        {/* <option value="">Select an option</option> */}
                                        <option value="Student">Student</option>
                                        <option value="Company">Company</option>
                                    </select>
                                    <span>Choose an option</span>
                                </label>

                                <label>
                                    <input
                                        type="password"
                                        className="input"
                                        value={pwd}
                                        onChange={(e) => setPwd(e.target.value)}
                                        required
                                    />
                                    <span>Password</span>
                                </label>

                                <label>
                                    <input
                                        type="password"
                                        className="input"
                                        value={cpwd}
                                        onChange={(e) => setCpwd(e.target.value)}
                                        required
                                    />
                                    <span>Confirm password</span>
                                </label>

                                <button className="submit" disabled={!fname || !validPwd || !validMatch} onClick={handleSubmit}>
                                    Sign Up
                                </button>

                                {/* {message && <p className={message.includes('successfully') ? 'success' : 'error'}>{message}</p>} */}

                                <p className="signin">Already have an account? <a href="#">Sign in</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Login() {
    const auth = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            console.log("fghjkl")
            if (response.data === "invalid") {
                console.log(response.data);
                toast.info("unauthorised credentials", { position: "bottom-right" });
            } else if (response.data === "newuser") {
                console.log(response.data);
                toast.info("unauthorised credentials", { position: "bottom-right" });
            } else if (response.status === 200) {
                const userData = response.data.user;
                auth.login(userData);
                toast.success("Login Successful", {
                    position: "bottom-right",
                    theme: "dark",
                });
                console.log('User Data:', userData);
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Internal server error", {
                position: "bottom-right",
                theme: "dark",
            });
        }
        setEmail('');
        setPassword('');
    };


    return (
        <div className="modal fade modal-lg" id="loginrModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="login">
                            <div className="container">
                                <div className='Logins-form'>
                                    <form className="form" onSubmit={handleSubmit}>
                                        <p className="title">Login</p>
                                        <div className="flex-column">
                                            <label>Email </label>
                                        </div>
                                        <div className="inputForm">
                                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Layer_3" data-name="Layer 3">
                                                    <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                                                </g>
                                            </svg>
                                            <input
                                                type="email"
                                                className="input"
                                                placeholder="Enter your Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="flex-column">
                                            <label>Password </label>
                                        </div>
                                        <div className="inputForm">
                                            <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0-26.476562-21.546875-48-48-48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16 16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                                                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0-8.832031-7.167969-16-16-16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0-8.832031-7.167969-16-16-16zm0 0"></path>
                                            </svg>
                                            <input
                                                type="password"
                                                className="input"
                                                placeholder="Enter your Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                                            </svg>
                                        </div>

                                        <div className="flex-row">
                                            <div>
                                                <input type="checkbox" />
                                                <label>Remember me </label>
                                            </div>
                                            <span className="span">Forgot password?</span>
                                        </div>

                                        <button className="button-submit" type="submit">Sign In</button>

                                        <p className="p">Don't have an account? <span className="span">Sign Up</span></p>
                                        {/* {message && <p className="message">{message}</p>} */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Login, RegistrationForm };
