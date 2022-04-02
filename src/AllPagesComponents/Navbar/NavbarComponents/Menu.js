// React Module Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Image Icons
import ArrowDown from '../../../Assets/icons/arrow-down.svg'
// import RightArrow from '../../../Assets/icons/right-arrow.svg'
import ProfilePicture from '../../../CommonComponents/ProfilePicture';

import '../NavbarLargeDevice/NavbarLargeDevice.css';
import MenuList from './MenuList';
import SubMenuList from './SubMenuList';

function Logo(props) {
    const {show,showMenu, setShowMenu} = props;
    const [ShowProfile, setShowProfile] = useState(false);
    // function handleMenuClick(){
    //        setShowProfile(!ShowProfile);
    //        setShowSubMenu(false);
    // }

    return (<>
    <div className= {showMenu ? "nav_list": "hide_nav_list nav_list"} >
        <button className='close_nav' onClick={()=>setShowMenu(false)}></button>
        <div className="Nave_signin">
            <ProfilePicture/>
            <p className={ShowProfile?"active":" "} onClick={()=>setShowProfile(!ShowProfile)}>Log In/ Sign Up <img className='down_arrow' src={ArrowDown} alt='ArrowDown' />
                <span className="user-content">
                    <Link className="dropbtn" to="/profile">My Profile</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/my-orders">Orders</Link>
                    <Link to="/sign-in">Sign Out</Link>
                </span>
            </p>
        </div>
        <ul className={show? "navbar_nav hide": "navbar_nav"}>
            <li>
                <Link to="/">View Shop</Link>
            </li>
            <li>
                {/* <MenuList ShowMenuList={ShowMenuList} setShowMenuList={setShowMenuList}> */}
                <MenuList manu = "Class 1">
                    {/* <SubMenuList ShowSubMenu={ShowSubMenu} setShowSubMenu= {setShowSubMenu}> */}
                    <SubMenuList >
                        <Link to="#">SUB-Category 3 </Link>
                    </SubMenuList>
                </MenuList>
            </li>
            <li>
                {/* <MenuList ShowMenuList={ShowMenuList} setShowMenuList={setShowMenuList}> */}
                <MenuList manu = "Class 2">
                    {/* <SubMenuList ShowSubMenu={ShowSubMenu} setShowSubMenu= {setShowSubMenu}> */}
                    <SubMenuList>
                        <Link to="#">SUB-Category 3 </Link>
                    </SubMenuList>
                </MenuList>
            </li>
            <li><Link to="/offers">Hot deals</Link></li>
        </ul>
    </div>
        </>
    );
  }
  
  export default Logo;
  