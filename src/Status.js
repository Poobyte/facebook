import React from 'react';
import {FaVideo ,FaImages ,FaRegGrinAlt} from 'react-icons/fa'; 



const Status = () => {
   
    
    return(
<div className= "statusfirstpart">
    <div className="statusf">
        <div className ="statusimg">



<span>
<img src ="../img/sayalee.PNG" ></img>
</span>
</div>
<div className="statusin">
<input type ="text" className ="statusinput" placeholder="Put your thought here" />
</div>
</div>

<div className ="statussecondpart">

             <span className ="statusIcons">
             <FaVideo className= "Live" />
             <span className= "text">Live Video</span>
             </span> 
        


            <span className ="statusIcons">
            <FaImages className= "Photos"/>
            <span className= "text">Photos / Images</span>
            </span>


           <span className ="statusIcons">
           < FaRegGrinAlt className= "Feelings" />
           <span className= "text">Feelings</span>
           </span>
</div>
</div>
        )}
export default Status;



    