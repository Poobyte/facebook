import React from 'react';
import {FaRegThumbsUp , FaRegCommentAlt, FaRegShareSquare} from 'react-icons/fa';



const Mnews = () => {

    const [p, setState] = React.useState([
        {id:1 , img:"../img/code.PNG" , name :"Good Morning Msg Group", time:"before 1hr ago   11/12/2020 ", text:"GOOD MORNING EVERYONE....." ,postimg:"../img/code.PNG", like:"20", share:"10" },
        {id:2 , img:"../img/thought.PNG" , name :"Movational Thought Group" ,time:"before 3hr ago  25/02/2021 ", text:"THOUGHT OF THE DAY...." ,postimg:"../img/thought.PNG" , like:"30", share:"5"},
    ]);
        
        return(
    <div className="news">   
    
      {p.map((n) => (
      
      <div key ={n.id} className ="empty">
      
      <div className ="newsheader">
      <div className ="newsheaderimg">
      <img src={n.img} alt ="user" />
      </div>
      
      <div  className ="newsheadername"> {n.name}
      <div  className ="newstime"> {n.time}
      </div>
      </div>
      </div>
    
    
     
     < div className ="newsbody" >
     <div  className ="newsbodytext"> {n.text} </div>
     <div  className ="newsbodypostimg"> <img src ={n.postimg} alt="post" /> 
      
      <div className="newspostIcon"> 
      <FaRegThumbsUp className="postIcon"></FaRegThumbsUp> 
    <div className="nLike">{n.like} 
    </div>
    <div className="nShare">  {n.share} Shares</div>
    </div>
     
     </div>
       
       <div className="newsIcons">
        <span className ="nIcons">
        <FaRegThumbsUp className= "Like" /> 
        <span className ="ntext"> Like </span> 
      </span>
     
      <span className ="nIcons">
        <FaRegCommentAlt className= "Comment" /> 
        <span className ="ntext"> Comment </span> 
      </span>
      
        
      <span className ="nIcons">
        <  FaRegShareSquare className= "Share" /> 
        <span className ="ntext"> Share </span> 
      </span>

    </div>
      </div>


      </div>
    ))}
</div>
      
        )}    
export default Mnews;



    