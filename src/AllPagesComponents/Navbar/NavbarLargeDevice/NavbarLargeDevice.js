// React Module Imports
import React,{useState} from 'react';

// Common Components Imports
import Menu from '../NavbarComponents/Menu';
import Search from '../NavbarComponents/Search';
import User from '../NavbarComponents/User';

// Import Image Icons
import Logo from '../../../CommonComponents/Logo/Logo';

import './NavbarLargeDevice.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function NavBar({showCart, setShowCart, cartItems}) {
   const [show, setShow] = useState(false);

   const UserSignin = useSelector((state)=> state.UserSignin)
    const {Signin,Signinloading,Signinerror} = UserSignin;

    if(Signinloading){
      console.log(Signinloading)
    }  else if(Signinerror){
      console.log(Signinerror)
    }else{
      console.log(Signin)
    }
  function handlesearch (e){
      e.preventDefault()
    setShow(!show)
  }
   
    return (
      <nav className='large_navbar'>
        <div className="navbar">
        <div className='nav_links'>
            <Logo/>
            <Menu show= {show}/>
          </div>
          <div className='nav_search'>
            <Search show= {show} handlesearch = {handlesearch}/>
            {
            !Signin ? <div className="user"><Link className='cart' to="/sign-in">Sign in</Link></div>  
            : !Signin.user ? <div className="user"><Link className='cart' to="/sign-in">Sign in</Link></div>  
            : <User userName = {Signin.user.email} showCart= {showCart} setShowCart= {setShowCart} cartItems={cartItems} />

            }
            
          </div>
        </div>
       </nav>
    );
  }
  
  export default NavBar;
  