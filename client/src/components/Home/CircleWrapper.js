import React from 'react';
import Circle from '../Home/Circle';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {filterChoose} from '../../action/sort-action';
import ofruit from '../../assets/fruit-cate_gbwcsb.webp';
import ovegets from '../../assets/veg-cate_nynblo.webp';
import ospices from '../../assets/spice-cate_so4g9g.webp';
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
                <Circle image={ofruit} name="ORGANIC FRUITS"/>
                </div>
            </Link>

            <Link to='/Products/?filter=vegetables' onClick={()=>{dispatch(filterChoose('vegetables'));}}>
                <div className="veg-cate">
                <Circle image={ovegets} name="ORGANIC VEGETABLES"/>
            </div>
            </Link>
            <Link to='/Products/?filter=spices' onClick={()=>{dispatch(filterChoose('spices'));}}>
            <div className="spi-cate">
                <Circle image={ospices} name="ORGANIC SPICES"/>
            </div>
            </Link>
            </div>
        </div>
    );
}
export default CircleWrapper;