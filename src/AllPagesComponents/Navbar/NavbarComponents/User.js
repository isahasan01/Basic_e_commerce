// React Module Importsc
import React from 'react';
import { Link } from 'react-router-dom';

// Import Image Icons
import Usericon from '../../../Assets/icons/icon_User.svg';
import ArrowDown from '../../../Assets/icons/small-down-arrow.svg'
import ShopIcon from '../../../Assets/icons/icon-Shop.svg'
import { useDispatch } from 'react-redux';
import { SignoutAct } from '../../../ReduxStore/Actions/SigninAction';

function User({ showCart, setShowCart, cartItems, userName }) {

    const dispatch = useDispatch();
    const signoutHandler =(e) =>{
        dispatch(SignoutAct());
    }
    return (
        <div className='user'>
            <div className="cart" onClick={() => setShowCart(!showCart)}>
                <img src={ShopIcon} alt='User icon' />
                <div className={cartItems[0].qty === 0 ?  "cart_total cart_hide" : "cart_total"}>
                    <h4>{cartItems.length && cartItems[0].qty}</h4>
                </div>
            </div>
            <img className='user_icon' src={Usericon} alt='User icon' />
            <p>Hello, {userName} <img className='down_arrow' src={ArrowDown} alt='ArrowDown' />
                <span className="user-content">
                    <Link className="dropbtn" to="/profile">My Profile</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/my-orders">Orders</Link>
                    <Link to="/" onClick={signoutHandler} > Sign Out</Link>
                </span>
            </p>
        </div>
    );
}

export default User;
