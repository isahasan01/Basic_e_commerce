import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Image Icons
import ArrowDown from '../../../Assets/icons/arrow-down.svg'
import RightArrow from '../../../Assets/icons/right-arrow.svg'

export default function MenuList(props) {
 const {manu} = props;
 const [ShowMenuList, setShowMenuList] = useState(false);

 
  return <>
            <div className= {ShowMenuList?"dropdown active":"dropdown"}>
                <button className="dropbtn" onClick={()=>setShowMenuList(!ShowMenuList)} > {manu} <img src={ArrowDown} alt='ArrowDown'/></button>
                <div className="dropdown-content">
                    {props.children}
                    <Link to="#">Category 2  <img src={RightArrow} alt="RightArrow" /></Link>
                    <Link to="#">Category 3  <img src={RightArrow} alt="RightArrow" /></Link>
                </div>
            </div>
        </>;
}
