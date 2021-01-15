import React from 'react';
import {FaFacebook,  FaSistrix} from 'react-icons/fa';
import {FaHome , FaFacebookMessenger , FaYoutubeSquare ,FaUsers , FaGamepad} from 'react-icons/fa';
import {FaPlus,FaBell, FaCaretDown} from 'react-icons/fa';
    

const Header = () => {
    return(

 <div className = "header">    

        <div className = "hleft">
        <div className = "hleftlogo"> < FaFacebook className="hlogo" /> </div>
        <div className ="hserach"> <input type ="text" placeholder="search" className="hbar"/>
        <FaSistrix className="hicon" /></div>
        </div> 
 
        
        
        <div className ="hcenter">

        <span className="cIcon">
            <FaHome className="hcentreicons"/>
            <span className="hnotification">20</span>
            </span>

            <span className="cIcon">
            <FaUsers className="hcentreicons"/>
            <span className="hnotification">5</span>
         </span>

        
        <span className="cIcon">
            <FaFacebookMessenger className="hcentreicons"/>
            <span className="hnotification">2</span>
          </span>



         <span className="cIcon">
            <FaYoutubeSquare  className="hcentreicons"/>
            <span className="hnotification">10</span>
         </span>
        
        <span className="cIcon">
            <FaGamepad className="hcentreicons" />
            <span className="hnotification">20</span>
         </span>
        
        
        </div>
       
        
        
        
        <div className = "hright"> 
        
        <span className="hlastpart">
         <FaPlus/> 
        </span>
        
        <span className="hlastpart">
        <FaBell/> 
        </span>
         
        <span className="hlastpart">
        <FaCaretDown/> 
        </span>


    </div>
 
 
 </div>
    )
}

export default Header;