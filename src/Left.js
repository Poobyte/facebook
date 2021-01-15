import React from 'react';



const Left = () => {
   

const [lg, setState] = React.useState([
    {id:1 , img:"../img/Fort.PNG" , name :"Fort Group"},
    {id:2 , img:"../img/places.PNG" , name :"Places Group"},
    {id:3 , img:"../img/code.PNG" , name :"Good Morning Msgs Group"},
     {id:4 , img:"../img/thought.PNG" , name :"Motivational Thought Group"},
    ]);
    
    return(
<div className="left" >   

  {lg.map((i) => (
  
  <div className ="leftkey" key ={i.id}>
  
  <div className ="leftimg">
  <img src={i.img} />
  </div>
  
  <div  className ="leftname"> {i.name}
  </div>


</div>

))}
        
 </div>
 )
}

export default Left;