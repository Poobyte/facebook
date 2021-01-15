import React from 'react';
import {FaPlus ,FaVideo ,FaPhone ,FaRegSun, FaRegWindowClose } from 'react-icons/fa';
import Chatboxfooter from './Chatboxfooter';

const Fbchat = () => {

    const [state, setState] = React.useState([

      {id:1 , img:"../img/sayalee.PNG" , name :"Joey" , time:"At 07:00Pm 11/12/2020 " , text :"Hi , How are you?"},
   
   ]);

    
    return(
      
        <div className="fchat" >  

    

        {state.map((s) => (

     <div className ="fchatlist" key ={s.id}>
     
        <div className ="chatbox">
                   <div className ="fname" input type="text" >

                   <span className ="chatIcons">
             <FaPlus className= "plus" /></span>
               

          <span className ="chatIcons">
             <FaVideo className= "video" /></span>
               
          <span className ="chatIcons">
             <FaPhone className= "call" />
             </span>

             <span className ="chatIcons">
             < FaRegSun className= "setting" />
            </span>
            
            
          <span className ="chatIcons">
             <FaRegWindowClose className= "close" />
         </span>




<div className ="fchati">
  <img src={s.img}  alt="" />
  <span className="fonline"></span>
  </div>

<div  className ="friendname"> {s.name}
< div className ="chatting" >
<span  className ="chattext"> {s.text}
      </span>
     
</div> 
<div  className ="chattime"> {s.time}
     </div>
</div>


</div>
<div className="ol">
<img src={s.img}  alt="" />
<span className="olf"></span>

</div>
     

<div className ="fwithchat" >
<span className= "ftext"> Hey hi , I am Good !</span>
</div>
< div className ="textimg"> 
<img src="../img/puja.PNG"  alt=" " />
<span className="fol"></span>

</div>
  


</div>
     
        </div>

))}
 <Chatboxfooter/>
</div>
)}
export default Fbchat;






   
