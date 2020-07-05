import React from 'react';
import Circle from '../Home/Circle';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {filterChoose} from '../../action/sort-action';
import ofruit from '../../assets/ofruits.jpeg';
import ovegets from '../../assets/ovegets.jpeg';
import ospices from '../../assets/ospices.jpeg';
import '../../styles/components/Home/CircleWrapper.css';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const CircleWrapper=()=>{
    const dispatch=useDispatch();

    return(
        <div className="home-cate">
            <div className="text-cate">
                <FontAwesomeIcon icon={faApple}/>
                <h1>Category</h1>
            </div>
            <div className="circle-wrapper">
            <Link to='/Products/?filter=fruit' onClick={()=>{dispatch(filterChoose('fruit'));}}>
                <div className="fruit-cate">
                <Circle image='https://res.cloudinary.com/testuncleveggieimg/image/upload/c_scale,w_300/v1593613737/ofruits_pqhba5.webp' name="ORGANIC FRUITS"/>
                </div>
            </Link>

            <Link to='/Products/?filter=vegetables' onClick={()=>{dispatch(filterChoose('vegetables'));}}>
                <div className="veg-cate">
                <Circle image='https://res.cloudinary.com/testuncleveggieimg/image/upload/c_scale,w_300/v1593613732/ovegets_lannqf.webp' name="ORGANIC VEGETABLES"/>
            </div>
            </Link>
            <Link to='/Products/?filter=spices' onClick={()=>{dispatch(filterChoose('spices'));}}>
            <div className="spi-cate">
                <Circle image='https://res.cloudinary.com/testuncleveggieimg/image/upload/c_scale,w_300/v1593613740/ospices_smuuse.webp' name="ORGANIC SPICES"/>
            </div>
            </Link>
            </div>
        </div>
    );
}
export default CircleWrapper;