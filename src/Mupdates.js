import React from 'react';



const Mupdates = () => {
   const [s, setState] = React.useState([
    {id:1 , img:"../img/sayalee.PNG" , name :"Joey"},
    {id:2 , img:"../img/Fort.PNG" , name :"Fort Group"},
    {id:3 , img:"../img/places.PNG" , name :"Places Group"},
    ]);
    
    return(
<div className="updates" >   

  {s.map((up) => (
  
  <div className ="updatesc" key ={up.id}>
  
<div className ="updatesb">
<img src={up.img} alt=""/>
                   
                   <div className ="updatesbo" >
                   <div className ="updatesboimg" >
                   <img src ={up.img} alt ="" />
                  </div>
                   </div>
                 

                   
</div>
  
<div  className ="updatesbodyname"> {up.name}
  </div>


</div>
  ))}

</div>
 )
}

export default Mupdates;