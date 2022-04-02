import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Image Icons
import RightArrow from '../../../Assets/icons/right-arrow.svg'

export default function SubMenuList(props) {
    // const {ShowSubMenu,setShowSubMenu }= props
    const [ShowSubMenu, setShowSubMenu] = useState(false);
    
   
    return <>
        <div className={ShowSubMenu? "sub_dropbtn active":"sub_dropbtn"} onClick={()=>setShowSubMenu(!ShowSubMenu)} ><Link to="#">Category 1  <img src={RightArrow} alt="RightArrow" /></Link>
            <div className="dropdown_sub_content">
                <Link to="#">SUB-Category 1 </Link>
                <Link to="#">SUB-Category 2 </Link>
                {props.children}
            </div>
        </div>
    </>;
}
