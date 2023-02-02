import React, { useState } from "react";
import './login.scss';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import show from '../../../src/Assets/Images/show.png';
import logo from '../../../src/Assets/Images/logo.png';
import logo1 from '../../../src/Assets/Images/logo1.png';
import textbg from '../../Assets/Images/signupbgss.png';
import google from '../../../src/Assets/Images/google_logo.png';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        const url = 'http://65.0.110.147:4000/adminLogin';
        fetch((url), {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const { errors } = data;
                if (errors) {
                    console.log(errors)
                }
                else {
                    localStorage.setItem('id', data._id)
                    localStorage.setItem('name', data.name)
                    localStorage.setItem('token', data.token)
                    navigate(`/bundles`);
                }
            })
    }

    const showPassword = () => {
        const data = passwordVisible ? false : true;
        setPasswordVisible(data)
    }


    return (
        <div className="login_container row">
            <div className="left_pane col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-sm-7 col-xs-7 col-7">
                        <img src={logo1} className='social_logo' />
                    </div>
                </div>
                <div className="welcome_heading">
                    <img src={logo} className='social_logo' />
                </div>
                <div className="login_form">
                    <input
                        type='text'
                        placeholder="Email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="registeration_fields"
                    />
                    <input
                        type={passwordVisible === true ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        className="registeration_fields"

                    />
                    {/* <img src={show} alt='' height='16px' width='28px' className='show_image' onClick={showPassword} /> */}
                    <span className="form_forgot_text">Forgot Password</span>
                    <Button onClick={handleLogin} className='login_btn'>Log in</Button>
                    <div className="social_login_btn">
                        <img src={google} height="0.875rem" /><span style={{ marginLeft: '0.75rem' }}>Log in with Google</span>
                    </div>
                </div>
                <div className="signup_link">Don't have an Account? <Link to='/signup'>Signup for free</Link></div>
                <div className="signup_footer">
                    ©︎ 2022 The Social Box. All rights reserved  |  Privacy policy
                </div>
            </div>
            <div className="login_right col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <div className="right_pane_top">
                    <div className="right_pane_text">
                        <span style={{ display: 'block' }}>Get a brand ambassador</span>
                        <span style={{ display: 'block' }}>to endorse your product.</span>
                        <span style={{ display: 'block' }}>Drive sales through</span>
                        <span style={{ display: 'block' }}>content creators.</span>
                    </div>
                </div>
                <div className="right_pane_bottom">
                </div>

            </div>

        </div>
    )
}
export default Login;