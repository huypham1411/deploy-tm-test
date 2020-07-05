import React from 'react';
import '../../styles/components/Home/Circle.css';
const Circle=(props)=>{
    return(
        <div className="circle-cpn" onClick={()=>console.log(1)}>
            <div className="circle-img">
                <img src={props.image} alt="categories-imgs"/>
            </div>
            <div className="circle-content">
                <p>{props.name}</p>
            </div>
     </div>
    );
}
export default Circle;