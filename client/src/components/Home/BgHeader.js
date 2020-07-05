import React from "react";
// import Image from '../../assets/slider1_ooniag.webp';
import '../../styles/components/Home/BgHeader.css';
import { Link } from "react-router-dom";
const BgHeader=()=>{
    return(
      // <img className="header-image" src={Image} alt="header-img"/> 
      <div className="bg-contain" data-bgimg="../../assets/slider1_ooniag.webp">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="bg-text">
                                <h1>Uncle Veggie</h1>
                                <h2>Fresher than ever</h2>
                                <p>
								                  10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!
							                  </p> 
                                <Link to='/Products'>View more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default BgHeader;