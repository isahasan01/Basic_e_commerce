// React Module Imports
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Common Components Imports
import Logo from '../../CommonComponents/Logo/Logo';
import BlackButton from '../../CommonComponents/Buttons/BlackButton';

import './SignIn.css';
import { useDispatch } from 'react-redux';
import { SigninAct } from '../../ReduxStore/Actions/SigninAction';
import { useSelector } from 'react-redux';

function SignIn() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    
    const UserSignin = useSelector((state)=> state.UserSignin)
    const {Signin,Signinerror} = UserSignin;
    console.log(Signin,Signinerror) 
    const dispatch = useDispatch();
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(SigninAct(email, password));
    }
    let history = useNavigate();
    useEffect(()=>{
        if(Signin){
            history("/");
        }
    },[ Signin])
    
    return (
        <>
            <section className='sign_in_page page_padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='column_left'>
                            <div className='sign_in_content'>
                                <Logo />
                                <h1>Sign in to Your Account</h1>
                                <p>Welcome to F-Ecommerce</p>
                            </div>
                        </div>
                        <div className='column_right'>
                            <div className='sign_in_form_content'>
                                <h4>Sign in to continue</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className='form_wrapper'>
                                        {Signinerror && <div className='input_group'>
                                            <label htmlFor="" className='input_field_label'>{Signinerror}</label>
                                        </div>}
                                        <div className='input_group'>
                                            <label htmlFor="" className='input_field_label'>Email</label>
                                            <input className='input_field' name='email' required onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your email' />
                                        </div>
                                        <div className='input_group'>
                                            <label htmlFor="" className='input_field_label'>Password</label>
                                            <input className='input_field' name='password' required onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder='Enter your password' />
                                        </div>
                                        <BlackButton type= 'submit' >Sign In</BlackButton>
                                    </div>
                                </form>
                                <div className='create_forgot'>
                                    <Link to='/forget-password' className='forgot_pass'>Forgot Password?</Link>
                                    <p>
                                        Don’t have any account? 
                                        <Link to='/sign-up' className='create_new'> Create One!</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignIn;
