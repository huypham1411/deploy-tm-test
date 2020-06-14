import React from 'react';
import '../../styles/components/Home/Circle.css';
const Circle=(props)=>{
    return(
        <div className="circle-cpn" onClick={()=>console.log(1)}>
            <img src={props.image} className="img-wrapper" alt="categories-imgs"/>
            <p className="circle-text">{props.name}</p>
     </div>
    );
}
export default Circle;