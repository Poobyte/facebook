import React from 'react';
import {FaRegImage,FaTelegram ,FaRegBell,FaRegGrinAlt,FaCameraRetro,FaGamepad ,FaFolder,FaRegThumbsUp } from 'react-icons/fa';


const  Chatboxfooter =() => {
return(
<div className ="chatboxfooter">

<div className ="msgtyping"> <input type ="text" placeholder="Type a message..." className="message"/>
  
  
</div>
   <div className="ficons">
        
   

              <span className ="footerIcons">
             <FaRegImage className= "img" /></span>
             


             <span className ="footerIcons">
             <FaTelegram className= "tele" /></span>


           <span className ="footerIcons">
             <FaRegBell className= "bell" /></span>
  

           <span className ="footerIcons">
            <FaRegGrinAlt className= "emoji" /></span>
            
        
            <span className ="footerIcons">
            <FaCameraRetro className= "camera" /></span>

            
            <span className ="footerIcons">
            <FaGamepad className= "game" /></span>

            <span className ="footerIcons">
            <FaFolder className= "folder" /></span>
    

            <span className ="footerIcons">
            <FaRegThumbsUp className= "thumbup" /></span>


</div>
   </div>
)}

export default Chatboxfooter;