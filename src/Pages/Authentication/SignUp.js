// React Module Imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Common Components Imports
import BlackButton from '../../CommonComponents/Buttons/BlackButton';
import { RegisterAct } from '../../ReduxStore/Actions/RegisterAction';

function SignUp() {
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[password_confirmation, setPassword_confirmation] = useState('')

    
    const UserRegister = useSelector((state)=> state.UserRegister)
    const {Register,Registererror} = UserRegister;
    console.log(Register,Registererror)

    const dispatch = useDispatch();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(RegisterAct(name, contact, email, password, password_confirmation));
    }
    useEffect(()=>{
        if(Register && Register.status){
            window.location.reload(true)
        }
    },[Register])
   
    return (
        <>
            <section className='deliver_address_edit page_padding'>
                <div className='container'>
                    <div className='deliver_address_edit_content'>
                        <h4>Create New Account</h4>
                        <form onSubmit={handleSubmit}>
                            <div className='form_wrapper'>
                                {Registererror && <div className='input_group'>
                                            <label htmlFor="" className='input_field_label'>invallaid username and password</label>
                                        </div>}
                                        {Register && Register.status ? <div className='input_group'>
                                            <label htmlFor="" className='input_field_label'>Register success</label>
                                        </div> : ''}
                                <div className='input_group'>
                                    <label htmlFor="" className='input_field_label'>Name</label>
                                    <input className='input_field' name='name' onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your Name' />
                                </div>
                                <div className='input_group'>
                                    <label htmlFor="" className='input_field_label'>Phone</label>
                                    <input className='input_field' name='contact' onChange={(e)=>setContact(e.target.value)} type="text" placeholder='Phone Number' />
                                </div>
                                <div className='input_group'>
                                    <label htmlFor="" className='input_field_label'>Email</label>
                                    <input className='input_field' name='email' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Phone Email' />
                                </div>
                                <div className='input_group'>
                                    <label htmlFor="" className='input_field_label'>Password</label>
                                    <input className='input_field' name='password' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Your Password' />
                                </div>
                                <div className='input_group'>
                                    <label htmlFor="" className='input_field_label'>Confirm Password</label>
                                    <input className='input_field' name='password_confirmation' onChange={(e)=>setPassword_confirmation(e.target.value)} type="text" placeholder='Confirm Password' />
                                </div>
                                <BlackButton type= 'submit'>submit</BlackButton>
                            </div>
                        </form>
                        <div className='create_forgot'>
                            <p>
                                Already Have Account?
                                <Link to='/sign-in' className='create_new'> LogIn here!</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
