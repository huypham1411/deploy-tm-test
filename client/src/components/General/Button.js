import React from 'react';
import '../../styles/components/General/Button.css';

const Button = props =>{
    return(
            <button className="header-btn" style={{backgroundColor:props.color}} onClick={props.onClick}>{props.name}</button>
    );
}

export default Button;