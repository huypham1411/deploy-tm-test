import React from 'react';
import Circle from '../Home/Circle';
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {filterChoose} from '../../action/sort-action';
import ofruit from '../../assets/ofruits.jpeg';
import ovegets from '../../assets/ovegets.jpeg';
import ospices from '../../assets/ospices.jpeg';
import '../../styles/components/Home/CircleWrapper.css';
const CircleWrapper=()=>{
    const dispatch=useDispatch();

    return(
        <div className="circle-wrapper">
        <NavLink to='/Products/?filter=fruit' onClick={()=>{dispatch(filterChoose('fruit'));}}>
             <Circle image={ofruit} name="ORGANIC FRUITS"/>
        </NavLink>
        <NavLink to='/Products/?filter=vegetables' onClick={()=>{dispatch(filterChoose('vegetables'));}}>
            <Circle image={ovegets} name="ORGANIC VEGETABLES"/>
        </NavLink>
        <NavLink to='/Products/?filter=spices' onClick={()=>{dispatch(filterChoose('spices'));}}>
            <Circle image={ospices} name="ORGANIC SPICES"/>
        </NavLink>
        </div>
    );
}
export default CircleWrapper;