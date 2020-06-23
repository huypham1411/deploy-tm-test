import React from "react";
import Image from '../../assets/organic.png';
import '../../styles/components/Home/BgHeader.css';
const BgHeader=(props)=>{
    return(
      <img className="header-image" src={Image} alt="header-img"/> 
    );
}
export default BgHeader;